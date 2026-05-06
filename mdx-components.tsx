import type { MDXComponents } from "mdx/types";

// Sobreescribir o agregar componentes para usar dentro de los .mdx
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
