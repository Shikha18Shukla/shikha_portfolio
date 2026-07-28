export type ExperienceItem = {
  role: string
  org: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Python Full Stack Development Intern',
    org: 'EduSkills',
    period: 'July 2025 — August 2025',
    points: [
      'Built and enhanced full-stack web application modules using Python and Flask, focused on clean backend architecture.',
      'Implemented REST APIs, authentication workflows, and CRUD functionality connected to a relational database.',
      'Practiced Git-based version control and collaborative workflows aligned with SDLC best practices.',
      'Debugged and optimized existing modules for correctness and performance.',
    ],
  },
]
