export const SITE_CONFIG = {
  name: "thesyscoder",
  title: "site reliability engineer & platform architect",
  description: "elite site reliability engineer specialized in making high-availability kubernetes boring. focused on reducing sli/slo variance and automating operational toil.",
  url: "https://thesyscoder.com",
  ogImage: "https://thesyscoder.com/og.png",
  links: {
    github: "https://github.com/thesyscoder",
    linkedin: "https://linkedin.com/in/pruthvirajs2",
    email: "contact@thesyscoder.com",
    medium: "https://medium.com/@thesyscoder",
  },
};

export const NAVIGATION = [
  { name: ".about", href: "#about" },
  { name: ".stack", href: "#skills" },
  { name: ".experience", href: "#experience" },
  { name: ".projects", href: "#projects" },
  { name: ".contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    company: "Microsoft",
    role: "Senior Site Reliability Engineer (PAS)",
    period: "Aug 2023 — Present",
    description: "Leading multi-region AKS-based platform services (PAS). focused on SLO-driven reliability, automated security compliance, and platform security hardening.",
    responsibilities: [
      "Automated the removal of weak SSL/TLS ciphers for App Gateway and HAProxy with Bicep policy definitions, reducing security risks and achieving 100% compliance verified by Nmap and SSL Labs reports.",
      "Designed and operated multi-region AKS-based platform services (PAS) using Go microservices and Helm, enabling ~40% faster product release cycles and providing internal teams with CaaS-like experience.",
      "Implemented automated certificate rotation using OnCert and Azure Key Vault to eliminate manual renewals and improve platform-wide security.",
      "Built and maintained Go-based control plane components and microservices on Kubernetes, integrating Linkerd service mesh to enhance traffic visibility, resiliency, and debugging efficiency by 40%.",
      "Automated key vault and storage access policy management across regions, reducing operational toil by ~60% while strengthening security and compliance for multi-tenant workloads.",
      "Defined and enforced SLIs/SLOs and implemented end-to-end observability using Prometheus and Azure Monitor, maintaining 99.95%+ availability for critical services and improving early anomaly detection.",
      "Led incident triage and on-call response for complex distributed systems, improving MTTR by ~35% through detailed runbooks, proactive monitoring, and cross-team collaboration.",
    ],
  },
  {
    company: "Nuance",
    role: "Site Reliability Engineer",
    period: "Jul 2022 — Aug 2023",
    description: "Automated cloud infrastructure and CI/CD pipelines for large-scale data platforms.",
    responsibilities: [
      "Designed and automated secure CI/CD pipelines for large-scale data platforms using Azure DevOps and PowerShell, increasing deployment velocity while enforcing security controls.",
      "Built automation for .NET runtime provisioning across 100+ servers with Ansible, eliminating configuration drift and improving reliability of backend services in production.",
      "Provisioned and operated Azure infrastructure using ARM templates and Ansible, delivering reproducible environments for distributed systems and supporting rapid iteration by development teams.",
      "Optimized observability and incident response by implementing Grafana and Prometheus, reducing alert fatigue by 30% and decreasing root cause analysis time for production incidents.",
    ],
  },
  {
    company: "Coredge.io",
    role: "DevOps Engineer",
    period: "Dec 2021 — Jun 2022",
    description: "Managed multi-tenant Kubernetes clusters and disaster recovery solutions.",
    responsibilities: [
      "Deployed and managed on-prem Kubernetes clusters with kubeadm, optimizing resources to achieve 99.9% availability and reliable performance for multi-tenant container workloads.",
      "Architected and deployed Velero-based backup and disaster recovery solutions, enabling 99%+ application recovery time objective and reducing data loss risk for containerized workloads.",
      "Engineered comprehensive monitoring infrastructure using Ansible, Prometheus, and Grafana, enabling 40% faster issue detection and resolution across multi-tenant clusters.",
    ],
  },
  {
    company: "Nutrino Tech Systems",
    role: "Site Reliability Engineer",
    period: "Oct 2019 — Dec 2021",
    description: "Built automation-first CI/CD pipelines and containerized microservices.",
    responsibilities: [
      "Built CI/CD pipelines in Azure DevOps for automation and .NET services, reducing deployment cycle time by ~50% and improving reliability of releases.",
      "Orchestrated containerization of Flask applications using Docker, enabling independent microservice deployments and reducing deployment friction by 35%, supporting 5x faster release cycles.",
      "Managed Ansible-based server provisioning and Linux VM automation, reducing manual operations and enabling consistent environments for distributed services.",
    ],
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["Go", "Python", "Bash", "TypeScript", "JavaScript", "PowerShell"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "AWS", "Google Cloud", "Terraform", "Bicep", "Ansible"],
  },
  {
    category: "Containers & Orchestration",
    items: ["Kubernetes", "Docker", "Helm", "Argo CD", "Linkerd"],
  },
  {
    category: "Observability",
    items: ["Prometheus", "Grafana", "Azure Monitor", "AppDynamics", "OpenTelemetry"],
  },
  {
    category: "CI/CD & DevOps",
    items: ["GitHub Actions", "Azure DevOps", "Velero", "REST API", "gRPC"],
  },
];

export const CERTIFICATIONS = [
  "Certified Kubernetes Administrator (CKA)",
  "Kubernetes and Cloud Native Security Associate (KCSA)",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Certified Kubernetes Application Developer (CKAD)",
  "Kubernetes and Cloud Native Associate (KCNA)",
];

export const PROJECTS = [
  {
    title: "Platform Resilience Engine",
    description: "Automated drift detection and self-healing for AKS clusters.",
    tech: ["Go", "Kubernetes", "Terraform"],
    links: { github: "https://github.com/thesyscoder" },
    outcome: "Reduced manual remediation by 80%.",
  },
  {
    title: "Global Traffic Spec",
    description: "Multi-region traffic management with Linkerd and App Gateway.",
    tech: ["Linkerd", "Bicep", "Azure"],
    links: { github: "https://github.com/thesyscoder" },
    outcome: "Latency reduction of 150ms for EU regions.",
  },
];
