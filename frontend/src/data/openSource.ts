export type PullRequest = {
  id: string
  title: string
  url?: string
}

export type Repo = {
  name: string
  url: string
  prs: PullRequest[]
}

export const openSourceOrgs = ['ELUSoC 2026', 'GSSOC 2025']

export const repos: Repo[] = [
  {
    name: 'OSSfolio',
    url: 'https://github.com/PRODHOSH/ossfolio',
    prs: [
      { id: '#544', title: 'Smooth transition effects on interactive buttons' },
      { id: '#543', title: 'Footer social link hover improvements' },
      { id: '#513', title: 'Keyboard accessibility improvements' },
      { id: '#508', title: 'Design system token improvements' },
      { id: '#495', title: 'Scrollbar UI enhancement' },
      { id: '#494', title: 'Tech stack display fixes' },
      { id: '#492', title: 'Contributor score animation' },
    ],
  },
  {
    name: 'Aarini',
    url: 'https://github.com/Him-an-shi/Aarini',
    prs: [
      { id: '#179', title: 'Share-link expiry validation tests' },
      { id: '#176', title: 'Symptom validation improvements' },
      { id: '#199', title: 'Authentication testing' },
      { id: '#200', title: 'Token expiry validation' },
    ],
  },
]

export const openSourceSummary =
  'Contributing to production-level open source projects through frontend improvements, accessibility, backend validation, and testing.'
