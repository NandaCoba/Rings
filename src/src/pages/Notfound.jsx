import React from 'react'

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-4">
      <h1 className="text-7xl font-extrabold text-green-400">404</h1>
      <p className="text-2xl mt-4 font-semibold">Halaman Tidak Ditemukan</p>
      <p className="text-sm text-gray-400 mt-2">Sepertinya kamu nyasar ke halaman yang tidak tersedia.</p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
      >
        Kembali ke Beranda
      </a>
    </div>
  )
}

export default Notfound
