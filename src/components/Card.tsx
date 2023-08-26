type IProps = {
 key: number
 data: {
  imgSrc: string
  username: string
  address: string
 }
 bgColor?: string
 styleObj?: React.CSSProperties
}
const Card: React.FC<IProps> = ({ data, bgColor, styleObj = {} }) => {
 return (
  <div
   className={`card group hover:bg-black w-full h-full grid grid-rows-[30%,15%,35%,15%] ${bgColor}`}
   style={styleObj}
  >
   <div className="p-5">
    <div className="w-[100px] p-5 h-[100px] flex justify-center items-center bg-[#F1F1F1] rounded-[100px] p-5">
     <img src={data.imgSrc} alt="user-mg" />
    </div>
   </div>

   <div className="p-5 text-xl font-bold group-hover:text-white">
    {data.username}
   </div>
   <div className="max-w-[14rem] text-ellipsis break-words whitespace-normal p-5 group-hover:text-white">
    {data.address}
   </div>

   <a className="p-5 bg-black text-white w-[150px] h-[70px] ml-5 group-hover:text-white group-hover:bg-blue-500">
    KNOW MORE
   </a>
  </div>
 )
}

export default Card
