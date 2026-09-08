export interface ServicePillar {
  id: string;
  slug: string;
  pillarNumber: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  targetAudience: string;
}

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  department: string;
  tagColor: 'primary' | 'tertiary' | 'indigo' | 'secondary';
  bio: string;
  fullBio?: string;
  specialties: string[];
  badge: string;
  iconName: string;
  certifications?: string[];
  projectsDelivered?: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Dados' | 'Cloud & DevOps' | 'Automação & CRM';
  tag: string;
  description?: string;
  versionOrType?: string;
}

export interface MethodologyStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  tags: string[];
  duration: string;
  artifacts: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Governança' | 'SLA & Telemetria' | 'Compliance & LGPD' | 'Contratação';
}

export interface StatKpi {
  id: string;
  label: string;
  value: string;
  subLabel: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

export interface ProjectLeadForm {
  companyName: string;
  contactName: string;
  corporateEmail: string;
  serviceInterest: string;
  techChallenge: string;
  lgpdAgreed: boolean;
}
