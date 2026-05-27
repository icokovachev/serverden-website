export type Topic = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
  accent: string;
};

export const topics: Topic[] = [
  {
    slug: "kubernetes",
    title: "Kubernetes",
    shortTitle: "Kubernetes",
    description:
      "Cluster builds, workloads, storage, ingress, GitOps, and operational notes from the lab.",
    tags: ["k3s", "proxmox", "gitops", "ingress"],
    accent: "#5eead4",
  },
  {
    slug: "linux",
    title: "Linux Servers",
    shortTitle: "Linux",
    description:
      "Practical Linux administration, hardening, networking, and service setup guides.",
    tags: ["ubuntu", "systemd", "networking", "security"],
    accent: "#facc15",
  },
  {
    slug: "docker",
    title: "Docker",
    shortTitle: "Docker",
    description:
      "Container workflows, Compose stacks, image hygiene, and self-hosted service patterns.",
    tags: ["compose", "containers", "registries", "self-hosted"],
    accent: "#38bdf8",
  },
  {
    slug: "automation",
    title: "Infrastructure Automation",
    shortTitle: "Automation",
    description:
      "Repeatable provisioning, CI/CD wiring, scripts, and infrastructure-as-code habits.",
    tags: ["ci-cd", "terraform", "ansible", "workflows"],
    accent: "#86efac",
  },
  {
    slug: "testing",
    title: "Automation Testing",
    shortTitle: "Testing",
    description:
      "Browser automation, API checks, K6 tests, pipelines, and reliability-focused validation.",
    tags: ["k6", "playwright", "api", "quality"],
    accent: "#fb923c",
  },
  {
    slug: "scripting",
    title: "Bash Scripting",
    shortTitle: "Scripting",
    description:
      "Small, sharp shell scripts for operations, diagnostics, backups, and everyday admin work.",
    tags: ["bash", "cli", "ops", "debugging"],
    accent: "#c084fc",
  },
  {
    slug: "monitoring",
    title: "Monitoring",
    shortTitle: "Monitoring",
    description:
      "Observability notes for metrics, logs, alerts, dashboards, and service health.",
    tags: ["prometheus", "grafana", "logs", "alerts"],
    accent: "#67e8f9",
  },
  {
    slug: "homelab",
    title: "Homelab Engineering",
    shortTitle: "Homelab",
    description:
      "Hardware, Proxmox, storage, networking, and self-hosted experiments that teach real ops.",
    tags: ["proxmox", "storage", "networking", "self-hosted"],
    accent: "#fda4af",
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
