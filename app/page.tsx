import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import { SimpleNavigation } from './components/SimpleNavigation'
import { Button } from './components/ui/Button'

export default function Home() {
  return (
    <div className='min-h-screen bg-white dark:bg-black'>
      <SimpleNavigation />

      {/* Hero Section */}
      <section
        id='home'
        className='pt-16 min-h-screen flex items-center justify-center'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in'>
              Hi, I&apos;m{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                Iurii Rebryk
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up'>
              Frontend Developer who creates modern and intuitive web
              applications using React, Next.js, and TypeScript
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up'>
              <Button size='lg' className='w-full sm:w-auto'>
                <Mail className='mr-2 h-5 w-5' />
                Get In Touch
              </Button>
              <Button variant='outline' size='lg' className='w-full sm:w-auto'>
                <ExternalLink className='mr-2 h-5 w-5' />
                View Projects
              </Button>
            </div>
            <div className='flex justify-center space-x-6 mt-8 animate-fade-in'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                aria-label='GitHub Profile'
              >
                <Github className='h-6 w-6' />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                aria-label='LinkedIn Profile'
              >
                <Linkedin className='h-6 w-6' />
              </a>
              <a
                href='mailto:your.email@example.com'
                className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors'
                aria-label='Send Email'
              >
                <Mail className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
              About Me
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Let me tell you a bit about myself, my experience, and what
              motivates me in development
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-4'>
                My Development Journey
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                With great passion for creating digital solutions, I specialize
                in Frontend development using modern technologies and best
                practices.
              </p>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                My experience includes working with React, Next.js, TypeScript,
                Tailwind CSS and many other tools that help create high-quality
                web applications.
              </p>
              <Button variant='outline'>Download CV</Button>
            </div>
            <div className='bg-white dark:bg-black rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-800'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                Core Skills
              </h4>
              <div className='space-y-3'>
                {[
                  'React & Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Node.js',
                  'Git & GitHub',
                ].map(skill => (
                  <div key={skill} className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3'></div>
                    <span className='text-gray-600 dark:text-gray-300'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
              My Projects
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Here are some of the projects I&apos;ve worked on
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map(project => (
              <div
                key={project}
                className='bg-white dark:bg-black rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow'
              >
                <div className='h-48 bg-gray-100 dark:bg-gray-800 rounded-md mb-4'></div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  Project {project}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  Description of the project and technologies used
                </p>
                <div className='flex space-x-3'>
                  <Button size='sm' variant='outline'>
                    <Github className='mr-2 h-4 w-4' />
                    Code
                  </Button>
                  <Button size='sm' variant='outline'>
                    <ExternalLink className='mr-2 h-4 w-4' />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
              Skills & Technologies
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Technologies I work with
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
            {[
              'React',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'Tailwind CSS',
              'Node.js',
              'Git',
              'Figma',
            ].map(skill => (
              <div key={skill} className='text-center'>
                <div className='h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3'>
                  <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                    {skill.charAt(0)}
                  </span>
                </div>
                <p className='text-sm font-medium text-gray-900 dark:text-white'>
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Get In Touch
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8'>
            Ready for new challenges and exciting projects
          </p>
          <Button size='lg'>
            <Mail className='mr-2 h-5 w-5' />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-gray-200 dark:border-gray-800 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-gray-600 dark:text-gray-300'>
            © 2024 Iurii Rebryk. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
