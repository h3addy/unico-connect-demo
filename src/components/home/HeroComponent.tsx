const HeroComponent = () => {
  return (
    <div
      className={`hero-component-wrapper lg:h-[94vh] md:h-[89vh] h-[65vh] bg-black grid md:grid-rows-[35%,15%,15%,30%]`}
    >
      <h1 className="w-[80%] md:w-[70%]  max-h-rem[4rem] md:max-h-[6rem] text-white text-center mt-[3rem] md:mt-[3rem] xl:mt-[5rem] mx-[auto] font-bold text-2xl lg:text-5xl md:text-4xl">
        <span className="text-[#ffffff80]">Transform your Ideas </span>into Stunning Products with Unico's Expert Team
      </h1>
      <p className="text-white w-[60%] md:w-[40%] text-center mx-[auto] text-xl">
        Build, Launch, and Scale your Products with Unmatched Efficiency
      </p>
      <a
        href="#"
        className={`get-started-btn w-[8rem] h-[3rem] mt-[10px] mb-[20px] mx-[auto] font-medium flex justify-center items-center bg-white text-black hover:bg-blue-500 hover:text-white`}
      >
        GET STARTED
      </a>
      <div className="hidden md:grid grid-cols-[30%,30%,30%] gap-5 justify-center">
        <div className="flex flex-col justify-around items-center">
          <img
            src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a7fa93d52282e9c85b3_Group%20289531.svg"
            loading="lazy"
            alt="icon-mobile"
            className="icons-hero w-[4rem] h-[4rem] mb-2"
          />
          <div className="text-white text-center w-[100%]  text-lg p-4 rounded-full border-[1px] border-[#ffffff33]">
            Top Mobile App Developers
          </div>
        </div>
        <div className="flex flex-col justify-around items-center">
          <img
            src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a820d72f61b1a74629c_Group%20289530.svg"
            loading="lazy"
            alt="icon-code"
            className="icons-hero w-[4rem] h-[4rem] mb-2"
          />
          <div className="text-white text-center w-[100%] text-lg p-4 rounded-full border-[1px] border-[#ffffff33]">
            Expert in No code Web Development
          </div>
        </div>
        <div className="flex flex-col justify-around items-center">
          <img
            src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a826201b89f5f3a5cc6_Group%20289529.svg"
            loading="lazy"
            alt="icon-design"
            className="icons-hero w-[4rem] h-[4rem] mb-2"
          />
          <div className="text-white text-center w-[100%] text-lg p-4 rounded-full border-[1px] border-[#ffffff33]">
            Top Design Agency
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
