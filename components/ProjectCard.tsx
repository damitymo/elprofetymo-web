import { Github, ExternalLink } from "lucide-react";

export type Project = {
  name: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`card flex flex-col ${
        project.highlight ? "!border-brand-orange/40" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <p className="font-medium text-white">{project.name}</p>
        {project.highlight && (
          <span className="text-[10px] text-brand-orange-light bg-brand-orange/15 px-2 py-0.5 rounded-md">
            destacado
          </span>
        )}
      </div>

      <p className="text-sm text-white/65 leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] font-mono text-white/65 border border-white/10 rounded-md px-2 py-0.5"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-3 text-sm">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white/65 hover:text-white transition"
          >
            <Github className="h-4 w-4" />
            Repo
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-brand-orange-light hover:text-brand-orange transition"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
