import data from '@/data/team.json'
import type { TeamMember } from '@/types/team'

export function getAllTeamMembers(): TeamMember[] {
  return data as TeamMember[]
}
