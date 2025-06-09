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
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in'>
              Привіт, я <span className='text-primary'>Юрій Ребрик</span>
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up'>
              Frontend розробник, який створює сучасні та інтуїтивні веб-додатки
              з використанням React, Next.js та TypeScript
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up'>
              <Button size='lg' className='w-full sm:w-auto'>
                <Mail className='mr-2 h-5 w-5' />
                Зв&apos;язатися зі мною
              </Button>
              <Button variant='outline' size='lg' className='w-full sm:w-auto'>
                <ExternalLink className='mr-2 h-5 w-5' />
                Переглянути проекти
              </Button>
            </div>
            <div className='flex justify-center space-x-6 mt-8 animate-fade-in'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors'
                aria-label='GitHub профіль'
              >
                <Github className='h-6 w-6' />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-foreground transition-colors'
                aria-label='LinkedIn профіль'
              >
                <Linkedin className='h-6 w-6' />
              </a>
              <a
                href='mailto:your.email@example.com'
                className='text-muted-foreground hover:text-foreground transition-colors'
                aria-label='Написати email'
              >
                <Mail className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-muted/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
              Про мене
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Розповім трохи про себе, свій досвід та що мене мотивує у розробці
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl font-semibold text-foreground mb-4'>
                Мій шлях у розробці
              </h3>
              <p className='text-muted-foreground mb-4'>
                З великою пристрастю до створення цифрових рішень, я
                спеціалізуюся на Frontend розробці з використанням сучасних
                технологій та найкращих практик.
              </p>
              <p className='text-muted-foreground mb-6'>
                Mій досвід включає роботу з React, Next.js, TypeScript, Tailwind
                CSS та багатьма іншими інструментами, які допомагають створювати
                якісні веб-додатки.
              </p>
              <Button variant='outline'>Завантажити CV</Button>
            </div>
            <div className='bg-background rounded-lg p-8 shadow-sm border border-border'>
              <h4 className='text-lg font-semibold text-foreground mb-4'>
                Основні навички
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
                    <div className='w-2 h-2 bg-primary rounded-full mr-3'></div>
                    <span className='text-muted-foreground'>{skill}</span>
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
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
              Мої проекти
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Ось деякі з проектів, над якими я працював
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map(project => (
              <div
                key={project}
                className='bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow'
              >
                <div className='h-48 bg-muted rounded-md mb-4'></div>
                <h3 className='text-xl font-semibold text-foreground mb-2'>
                  Проект {project}
                </h3>
                <p className='text-muted-foreground mb-4'>
                  Опис проекту та використаних технологій
                </p>
                <div className='flex space-x-3'>
                  <Button size='sm' variant='outline'>
                    <Github className='mr-2 h-4 w-4' />
                    Код
                  </Button>
                  <Button size='sm' variant='outline'>
                    <ExternalLink className='mr-2 h-4 w-4' />
                    Демо
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 bg-muted/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
              Навички та технології
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Технології, з якими я працюю
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
                <div className='h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3'>
                  <span className='text-2xl font-bold text-primary'>
                    {skill.charAt(0)}
                  </span>
                </div>
                <p className='text-sm font-medium text-foreground'>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
            Зв&apos;яжіться зі мною
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
            Готовий до нових викликів та цікавих проектів
          </p>
          <Button size='lg'>
            <Mail className='mr-2 h-5 w-5' />
            Написати листа
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-border py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-muted-foreground'>
            © 2024 Юрій Ребрик. Всі права захищені.
          </p>
        </div>
      </footer>
    </div>
  )
}
