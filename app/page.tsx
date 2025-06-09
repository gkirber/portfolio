export default function Home() {
  return (
    <main className='min-h-screen pt-16'>
      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center px-4'>
        <div className='text-center'>
          <div>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 animate-fade-in'>
              Hi, I'm <span className='text-blue-600'>Iurii Rebryk</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up'>
              Frontend Developer who creates modern and intuitive web
              applications using React, Next.js, and TypeScript
            </p>
            <div className='flex gap-4 justify-center flex-wrap animate-slide-up'>
              <a
                href='#contact'
                className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'
              >
                Get In Touch
              </a>
              <a
                href='#projects'
                className='border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors'
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
            About Me
          </h2>
          <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
            Let me tell you a bit about myself, my experience, and what
            motivates me in development
          </p>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl font-semibold mb-4'>
                My Development Journey
              </h3>
              <p className='text-gray-600 mb-4'>
                With great passion for creating digital solutions, I specialize
                in Frontend development using modern technologies and best
                practices.
              </p>
              <p className='text-gray-600 mb-6'>
                My experience includes working with React, Next.js, TypeScript,
                Tailwind CSS and many other tools that help create high-quality
                web applications.
              </p>
              <a
                href='#'
                className='border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors inline-block'
              >
                Download CV
              </a>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h4 className='text-xl font-semibold mb-6'>Core Skills</h4>
              <div className='space-y-4'>
                {[
                  'React & Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Node.js',
                  'Git & GitHub',
                ].map(skill => (
                  <div key={skill} className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mr-3'></div>
                    <span className='text-gray-600'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
            My Projects
          </h2>
          <p className='text-center text-gray-600 mb-12'>
            Here are some of the projects I've worked on
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map(project => (
              <div
                key={project}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
              >
                <div className='h-48 bg-gray-200'></div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    Project {project}
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    Description of the project and technologies used
                  </p>
                  <div className='flex gap-3'>
                    <a
                      href='#'
                      className='border border-blue-600 text-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-50 transition-colors'
                    >
                      Code
                    </a>
                    <a
                      href='#'
                      className='border border-blue-600 text-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-50 transition-colors'
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
            Skills & Technologies
          </h2>
          <p className='text-center text-gray-600 mb-12'>
            Technologies I work with
          </p>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8'>
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
                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-3'>
                  {skill.charAt(0)}
                </div>
                <p className='text-sm font-medium'>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Get In Touch</h2>
          <p className='text-gray-600 mb-8'>
            Ready to work together? Let's make something amazing!
          </p>
          <a
            href='mailto:hello@example.com'
            className='bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors inline-block'
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <p className='text-gray-400'>
            © 2024 Iurii Rebryk. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
