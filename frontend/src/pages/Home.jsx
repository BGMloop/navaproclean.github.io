import React from 'react'
import About from '../components/About/About'
import CleanerList from '../components/Cleaners/CleanerList'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleBookCleaning = () => {
    navigate('/booking')
  }

  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help keep your space clean & organized
                </h1>
                <p className="text__para">
                  Professional cleaning services for your home or office. 
                  Experienced, reliable, and thorough cleaning professionals.
                </p>
                <button className="btn" onClick={handleBookCleaning}>Book a Cleaning</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Professional Cleaners</h2>
            <p className="text__para text-center">
              World-class cleaning professionals ready to serve you.
            </p>
          </div>
          <CleanerList />
        </div>
      </section>
    </>
  )
}

export default Home 