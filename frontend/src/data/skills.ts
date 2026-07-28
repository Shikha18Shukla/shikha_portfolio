export type SkillCategory = {
  id: string
  label: string
  comment: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    comment: 'languages I ship in',
    items: ['Python', 'Java', 'SQL'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    comment: 'where I spend most of my curiosity',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'OpenCV',
      'LLMs',
      'RAG',
      'Generative AI',
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    comment: 'services & APIs',
    items: ['Flask', 'REST APIs'],
  },
  {
    id: 'cs-fundamentals',
    label: 'CS Fundamentals',
    comment: 'the foundation underneath',
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'API Design', 'SDLC'],
  },
  {
    id: 'tools',
    label: 'Tools',
    comment: 'day-to-day workflow',
    items: ['Git', 'GitHub', 'Open Source Workflows', 'Agile / SDLC Practices'],
  },
]
