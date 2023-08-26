import Layout from '../../components/Layout'
// import FutureComponent from '../../components/home/FutureComponent'
import HeroComponent from '../../components/home/HeroComponent'
import ServicesComponent from '../../components/home/ServicesComponent'

const Home = () => {
 return (
  <Layout>
   <HeroComponent />
   <ServicesComponent />
   {/* <FutureComponent /> */}
  </Layout>
 )
}

export default Home
