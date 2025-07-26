import Navbar from '../components/gen/Navbar'
import Table from '../layouts/home/Table'
import Footer from '../components/gen/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="mt-10 space-y-5 p-9 flex-1">
        <Table />
      </div>

      <Footer />
    </div>
  )
}

export default Home
