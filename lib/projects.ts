export interface ProjectConfig {
  id: string;
  name: string;
  client: string;
  description: string;
  active: boolean;
  password?: string; // Volitelné heslo pro ochranu náhledu
  createdAt: string;
  template: 'default' | 'business' | 'portfolio' | 'landing' | 'custom';
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
    template: 'custom'
  },
  // Přidej sem další projekty pro klienty
};

export function getProject(id: string): ProjectConfig | null {
  return projects[id] || null;
}

export function getAllActiveProjects(): ProjectConfig[] {
  return Object.values(projects).filter(p => p.active);
}
