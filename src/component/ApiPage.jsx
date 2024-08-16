import React, { useEffect } from 'react'
import Apinav from './Apinav'
import Container from './Container'
import Price from './Price'

const ApiPage = () => {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []); 
    
  return (
    <>
    <div className="apibg-color text-color">
        {/* Navbar in Api page */}
        <Apinav/>

        <div>

            {/* Overview */}
            <Container>
                <section id="overview" className="mt-8 md:w-3/4 w-auto md:mx-auto mx-3 rounded-lg pt-16 md:px-10  px-5 py-8 apisecbg-color border-gray-400 border-opacity-15 border-[0.5px]">
                    <h2 className="text-3xl font-bold apiheading-color ">Overview</h2>
                    <p className="mt-4">The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
                </section>
            </Container>

            {/* Auth section */}
            <Container>
                <section id="auth" className="mt-8 md:w-3/4 w-auto md:mx-auto mx-3 rounded-lg pt-16 md:px-10 px-5 py-8 apisecbg-color border-gray-400 border-opacity-15 border-[0.5px]">
                    <h2 className="text-3xl font-bold apiheading-color ">Authentication</h2>
                    <p className="mt-4">To use the API, you need to include your API key in the header of each request:</p>
                    <div className="apisecbg-color rounded">
                        <p className='border-gray-400 border-opacity-15 border-[0.5px] px-4 py-3 rounded-lg'>X-API-Key:&nbsp;&nbsp;YOUR_API_KEY</p>
                        <p>To generate an API key, use the button below:</p>
                    </div>
                    <button className="mt-4 bg-[rgb(34,211,238)] text-black hover:bg-[rgb(34,146,238)] font-bold py-3 px-4 rounded">Generate API Key</button>
                    <div className='mt-2 border-gray-400 border-opacity-15 border-[0.5px] px-4 py-6 rounded-lg w-full'></div>
                </section>
            </Container>

            {/* Pricing */}    
            <Container>
                <section id="price" className="mt-8 md:w-3/4 w-auto md:mx-auto mx-3 rounded-lg pt-16 md:px-10 px-5 py-8  apisecbg-color border-gray-400 border-opacity-15 border-[0.5px]">
                    <Price/>
                </section>
            </Container>
        </div>
    </div>
      
        
    </>
   
  )
}

export default ApiPage