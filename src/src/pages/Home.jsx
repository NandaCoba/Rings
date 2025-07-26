import React from 'react'
import Navbar from '../components/gen/Navbar'
import Table from '../layouts/home/Table'
import MainPort from '../layouts/home/MainPort'
import Footer from '../components/gen/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="mt-10 space-y-5 p-9 flex-1">
        {/* <MainPort /> */}
        <Table />
      </div>

      <Footer />
    </div>
  )
}

export default Home
