// import Footer from './Footer'
import Header from './Header'

type IProps = {
 children: React.ReactNode
}
const Layout: React.FC<IProps> = ({ children }) => {
 return (
  <div className="flex flex-col">
   <Header />
   <div className={`mt-[5rem] md:mt-[5rem]`}>{children}</div>
   {/* <div>
    <Footer />
   </div> */}
  </div>
 )
}

export default Layout
