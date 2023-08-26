import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const Header = () => {
  const [showList, setShowList] = useState<boolean>(false)
  return (
    <>
      <nav
        className={`p-5 z-[20] md:h-[5rem] w-full fixed bg-white  transform transition-all origin-top ease-in-out duration-500 ${
          showList ? 'h-full' : 'h-[5rem]'
        } shadow md:flex md:items-center md:justify-center`}
      >
        <div className="flex justify-between items-center ">
          <img
            width="161"
            height="49"
            src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62a443e6434916672ae8ad5f_BLACK%20LOGO.svg"
            loading="lazy"
            alt=""
            className="logo"
          />
          <div
            onClick={() => setShowList(!showList)}
            className={`text-3xl flex justify-center items-center w-[3rem] h-[3rem] cursor-pointer mx-2 md:hidden block ${
              showList ? 'bg-[#1a8ef7]' : 'bg-white'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={`${showList ? '#fff' : '#000'}`}
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>

        <ul
          className={`flex flex-col md:justify-center md:items-center md:w-[80%] md:flex-row md:scale-y-100 transform transition-all origin-top ease-in-out duration-500 ${
            showList ? 'scale-y-100' : 'scale-y-0'
          }`}
        >
          <li className="mx-4 my-3 md:my-0 md:relative group">
            <a
              href="#"
              className="flex justify-between md:inline-block md:relative top-0 left-0 text-base md:text-xs  lg:text-sm xl:text-base hover:text-cyan-500 duration-500"
            >
              <span className="inline-block relative">Services</span>
              <ChevronDownIcon className="h-[24px] w-[25px] md:hidden" />
            </a>
            <div className="hidden md:block md:scale-y-0 transform transition-all ease-in-out origin-top duration-250 group-hover:scale-y-100 md:absolute top-10 left-0 bg-white md:bg-[#000000cc] blur w-[15rem] p-2"></div>
            <ul className="hidden group-hover:block md:scale-y-0 transform transition-all ease-in-out origin-top duration-250 group-hover:scale-y-100 md:absolute top-10 left-0 bg-red md:bg-[#000000e5] w-[15rem] p-2">
              <li className="p-2 md:text-white">
                <a href="#">Mobile App Development</a>
              </li>
              <li className="p-2 md:text-white">
                <a href="#">Web Development</a>
              </li>
              <li className="p-2 md:text-white">
                <a href="#">Ui/Ux</a>
              </li>
              <li className="p-2 md:text-white">
                <a href="#">AI Development</a>
              </li>
              <li className="p-2 md:text-white">
                <a href="#">Technical Consulting</a>
              </li>
            </ul>
          </li>
          <li className="mx-4 my-3 md:my-0 relative group">
            <a
              href="#"
              className="flex justify-between md:inline-block md:relative top-0 left-0 text-base md:text-xs  lg:text-sm xl:text-base hover:text-cyan-500 duration-500"
            >
              <span className="inline-block relative">Hire Developers</span>
              <ChevronDownIcon className="h-[24px] w-[25px] md:hidden" />
            </a>
            <div className="hidden md:block md:scale-y-0 transform transition-all ease-in-out origin-top duration-250 group-hover:scale-y-100 md:absolute top-10 left-0 bg-white md:bg-[#000000cc] blur md:w-[30rem] p-2"></div>
            <div className="hidden group-hover:block group-hover:md:flex md:flex-cols md:scale-y-0 transform transition-all ease-in-out origin-top duration-250 group-hover:scale-y-100 md:absolute top-10 left-0 bg-red md:bg-[#000000e5] md:w-[30rem] p-2">
              <ul>
                <li className="p-2 md:text-white">
                  <a href="#">Mobile App Development</a>
                </li>
                <li className="p-2 md:text-white">
                  <a href="#">Web Development</a>
                </li>
                <li className="p-2 md:text-white">
                  <a href="#">Ui/Ux</a>
                </li>
                <li className="p-2 md:text-white">
                  <a href="#">AI Development</a>
                </li>
                <li className="p-2 md:text-white">
                  <a href="#">Technical Consulting</a>
                </li>
              </ul>
              <ul>
                <li className="p-2 md:text-white">
                  <a href="#">Mobile App Development</a>
                </li>
                <li className="p-2 md:text-white">
                  <a href="#">Web Development</a>
                </li>
                <li className="p-2 md:text-white">
                  <a href="#">Ui/Ux</a>
                </li>
                <li className="p-2 md:text-white">
                  <a href="#">AI Development</a>
                </li>
                <li className="p-2 md:text-white">
                  <a href="#">Technical Consulting</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" className="text-base md:text-xs  lg:text-sm xl:text-base hover:text-cyan-500 duration-500">
              Case Study
            </a>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" className="text-base md:text-xs  lg:text-sm xl:text-base hover:text-cyan-500 duration-500">
              Pricing Plan
            </a>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" className="text-base md:text-xs  lg:text-sm xl:text-base hover:text-cyan-500 duration-500">
              No Code Tools
            </a>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" className="text-base md:text-xs  lg:text-sm xl:text-base hover:text-cyan-500 duration-500">
              About Us
            </a>
          </li>

          <button className="bg-black p-3 my-3 md:w-[15%] w-full text-white duration-500 hover:bg-[#1a8ef7]">
            Get in Touch
          </button>
          <h2 className=""></h2>
        </ul>
      </nav>
    </>
  )
}

export default Header
