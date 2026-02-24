export interface ProjectConfig {
  id: string;
  name: string;
  client: string;
  description: string;
  active: boolean;
  password?: string;
  createdAt: string;
  template: 'default' | 'business' | 'portfolio' | 'landing' | 'custom';
  iframeUrl?: string; // URL pro iframe příkaz - pro externí Next.js projekty
}

export const projects: Record<string, ProjectConfig> = {
  'endoria': {
    id: 'endoria',
    name: 'Endoria',
    client: 'Endoria',
    description: 'Endoria Minecraft Server',
    active: true,
    password: 'umon2026',
    createdAt: '2026-02-12',
    template: 'custom',
    iframeUrl: 'https://endoria.vercel.app/' // Doplnit po deploy Endoria na Vercel
  },
  // Přidej sem další projekty
};

export function getProject(id: string): ProjectConfig | null {
  return projects[id] || null;
}

export function getAllActiveProjects(): ProjectConfig[] {
  return Object.values(projects).filter(p => p.active);
}
