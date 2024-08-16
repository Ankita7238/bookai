import React from 'react'
import Container from './Container'
import Navbar from './Navbar'

const HomePage = () => {
  // Common button styles to reduce repetition
  const buttonStyles = {
    background: 'linear-gradient(155deg, rgba(84, 166, 249, 0.77), #6049f6)',
    boxShadow: '0 4px 15px rgba(128, 0, 255, 0.4)'
  };

  return (
    <div className='bg-color'>
      <header>
        <Container>
          {/* Navbar in HOME page */}
          <Navbar />
        </Container>
      </header>

      <main>
        <Container>
          {/* HERO SECTION */}
          <div className='md:mt-10 mt-5 md:h-screen p-5  mx-auto flex-col justify center items-center font-sans text-color text-center' >
                <div className='md:text-5xl text-4xl font-bold md:leading-normal leading-tight'>
              <p>
                Explore the Possibilities of{' '}
                <span className='underline underline-offset-8 text-violet-800 decoration-cyan-400'>
                  AI Book Writing
                </span>{' '}
                with BookAI
              </p>
            </div>
            <div className='mt-3 md:w-4/6 w-full mx-auto text-lg font-medium sectext-color leading-snug'>
              <p>Unleash the power of AI to create captivating books in minutes.</p>
              <p>Download, Distribute wherever you want. Generate unlimited free books.</p>
            </div>
            <div className='mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2'>
              <button
                className='px-5 py-3 font-normal text-lg text-color rounded-full transition hover:bg-purple-500'
                style={buttonStyles}
              >
                Get Started
              </button>
              <button
                className='px-5 py-3 font-normal text-lg text-color rounded-full transition hover:bg-purple-500'
                style={buttonStyles}
              >
                Get API Access
              </button>
            </div>
          </div>
        </Container>

        {/* Nav items sections */}
        <div className='bg-violet-400 overflow-hidden'>

          {/* Features sections */}
          <section
            id='features'
            className='my-4 pt-20 h-screen flex flex-col items-center justify-center border-solid border-2 border-violet-900 rounded-lg text-center'
          >
            <h1 className='text-4xl font-bold mb-4'>Features</h1>
            <p className='text-lg text-gray-700'>Have a look at our amazing features.</p>
          </section>

          {/* Works sections */}
          <section
            id='works'
            className='my-4 pt-20 h-screen flex flex-col items-center justify-center border-solid border-2 border-violet-900 rounded-lg text-center'
          >
            <h1 className='text-4xl font-bold mb-4'>How it Works</h1>
            <p className='text-lg text-gray-700'>Learn how our product works.</p>
          </section>

          {/* Roadmap sections */}
          <section
            id='roadmap'
            className='my-4 pt-20 h-screen flex flex-col items-center justify-center border-solid border-2 border-violet-900 rounded-lg text-center'
          >
            <h1 className='text-4xl font-bold mb-4'>Roadmap</h1>
            <p className='text-lg text-gray-700'>Follow our roadmap for the future.</p>
          </section>
          
        </div>
      </main>
    </div>
  );
}

export default HomePage;
