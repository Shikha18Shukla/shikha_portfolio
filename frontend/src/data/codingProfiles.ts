export type CodingProfile = {
  name: string
  url: string
  stat?: string
}

export const codingProfiles: CodingProfile[] = [
  { name: 'GitHub', url: 'https://github.com/Shikha18Shukla' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/Shikha_Shukla19/', stat: '400+ solved' },
  { name: 'Codeforces', url: 'https://codeforces.com/profile/Shikha_shukla' },
  { name: 'CodeChef', url: 'https://www.codechef.com/dashboard' },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/shikhashub2lx' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/shikhashuklakni1' },
]

export const codingAchievements = [
  { label: 'LeetCode problems solved', value: '400+' },
  { label: 'HackerRank — Python', value: '4★' },
  { label: 'HackerRank — SQL', value: '4★' },
  { label: 'HackerRank — Problem Solving', value: '3★' },
]
