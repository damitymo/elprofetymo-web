import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1F3A5F",
          "navy-dark": "#15294A",
          "navy-deeper": "#0F1729",
          orange: "#E88A1A",
          "orange-light": "#F7B26A",
          "orange-soft": "#FBD79D",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(229 231 235 / 0.85)",
            "--tw-prose-headings": "#fff",
            "--tw-prose-lead": "rgb(229 231 235 / 0.85)",
            "--tw-prose-links": "#E88A1A",
            "--tw-prose-bold": "#fff",
            "--tw-prose-counters": "rgb(229 231 235 / 0.6)",
            "--tw-prose-bullets": "rgb(232 138 26 / 0.6)",
            "--tw-prose-hr": "rgb(255 255 255 / 0.1)",
            "--tw-prose-quotes": "#fff",
            "--tw-prose-quote-borders": "#E88A1A",
            "--tw-prose-code": "#F7B26A",
            "--tw-prose-pre-code": "#E0F2FE",
            "--tw-prose-pre-bg": "#1F3A5F",
            "--tw-prose-th-borders": "rgb(255 255 255 / 0.1)",
            "--tw-prose-td-borders": "rgb(255 255 255 / 0.06)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
