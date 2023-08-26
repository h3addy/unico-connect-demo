import Card from '../Card'
import { useRef, useState, RefObject, useMemo, useEffect } from 'react'

function useIsInViewport(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), [])

  useEffect(() => {
    if (ref?.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}

const ServicesComponent = () => {
  const serviceRef = useRef<HTMLDivElement>(null)

  const isInView = useIsInViewport(serviceRef)

  useEffect(() => {
    if (isInView) {
      const ele1 = document.querySelector('#unique-text')
      const ele2 = document.querySelector('#cards-wrapper')
      const ele3 = document.querySelector('#unico-text')
      const ele4 = document.querySelector('#approach-text')
      if (ele1 && ele2 && ele3 && ele4) {
        ele1.classList.add('after:animate-strike-through')
        ele2.classList.add('animate-move-up')
        ele3.classList.add('animate-move-right-1')
        ele3.classList.add('after:animate-line-disappear')
        ele4.classList.add('animate-move-right-2')
      }
    }
  }, [isInView])
  const data = [
    {
      username: 'Leanne Graham',
      address: 'afaaaaaaaafafafafafafafafafaffafafafafafaffffffffffffffffffffffffff',
      imgSrc: 'https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550dee24ff2ce291e53296_Mobilesvg.svg',
    },
    {
      username: 'Leanne Graham',
      address: 'afaaaaaaaafafafafafafafafafaffafafafafafaffffffffffffffffffffffffff',
      imgSrc: 'https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550dab70bc1b37fe601c4d_web.svg',
    },
    {
      username: 'Leanne Graham',
      address: 'afaaaaaaaafafafafafafafafafaffafafafafafaffffffffffffffffffffffffff',
      imgSrc: 'https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550daca3e08513d1280aca_uiux.svg',
    },
    {
      username: 'Leanne Graham',
      address: 'afaaaaaaaafafafafafafafafafaffafafafafafaffffffffffffffffffffffffff',
      imgSrc: 'https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550dac2b325206cd3ad454_tech.svg',
    },
  ]
  const bgColors = ['bg-[#ccfbc4]', 'bg-[#cde1fb]', 'bg-[#fcf6c7]', 'bg-[#fbcdcd]']
  return (
    <div className="services-wrapper w-[95%] md:[100vh] lg:h-[90vh] mx-[auto] pt-[1rem]" ref={serviceRef}>
      <div className="service-text-wrapper flex flex-col items-start">
        <div className="text-[#101010] tracking-widest uppercase inline-block text-sm font-medium">services</div>
        <h2 className="text-[#1a8ef7] text-4xl font-bold group">
          <div className="inline-block">The</div>
          <div className="ml-5 relative inline-block">
            <span
              className='font-normal inline-block relative after:content-[""] after:absolute after:top-[50%] after:left-0 after:w-[100%] after:h-[3px] after:bg-[#1a8ef7]'
              id="unique-text"
            >
              Unique
            </span>
          </div>
          <div className="ml-5 relative inline-block">
            <span
              className='font-bold inline-block relative after:content-[""] after:absolute after:top-[90%] after:left-0 after:w-[0%] after:h-[10px] after:bg-[#1a8cf7a6]'
              id="unico-text"
            >
              Unico
            </span>
          </div>
          <div id="approach-text" className="ml-5 inline-block">
            Approach
          </div>
        </h2>
      </div>
      <div
        id="cards-wrapper"
        className="service-grid mt-10 md:justify-center md:h-[100%] lg:h-[80%] grid grid-rows-[25%,25%,25%,25%] md:grid-rows-[50%,50%] md:grid-cols-[40%,40%] lg:grid-cols-[24%,24%,24%,24%] lg:grid-rows-1 gap-2 md:gap-3 lg:gap-5"
      >
        {data && data.map((d, index) => <Card key={index} data={d} bgColor={bgColors[index]} />)}
      </div>
    </div>
  )
}

export default ServicesComponent
