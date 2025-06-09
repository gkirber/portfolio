export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  description?: string
}

export interface Contact {
  email: string
  phone?: string
  location?: string
  github?: string
  linkedin?: string
  website?: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  avatarUrl?: string
  resumeUrl?: string
  contact: Contact
} 