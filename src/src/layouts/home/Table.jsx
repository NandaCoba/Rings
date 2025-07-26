import React, { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import Cookies from 'js-cookie'
import axios from 'axios'
import AddConnection from './AddConnection'
import { api } from '../../utils/api'
import toast from 'react-hot-toast'

const Table = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const itemsPerPage = 10

  const fetchData = async () => {
    try {
      const token = Cookies.get('token')
      const response = await axios.get(`${api}/connection`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          search: searchTerm,
          page: currentPage,
          limit: itemsPerPage,
        },
      })

      setData(response.data.data || [])
      const total = response.data.total || 0
      setTotalPages(Math.ceil(total / itemsPerPage))
    } catch (err) {
      console.error('Failed to fetch data:', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage, searchTerm])

const toggleStatus = async (connectionId) => {
  try {
    const token = Cookies.get("token")

    await axios.put(
      `${api}/connection/update_status/${connectionId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    setData((prevData) =>
      prevData.map((item) =>
        item.connectionId === connectionId
          ? { ...item, status: !item.status }
          : item
      )
    )

    toast.success("Status updated!")
  } catch (error) {
    console.error(error)
    toast.error("Failed to update status.")
  }
}


  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleAddConnection = (newItem) => {
    setData([{ ...newItem, id: data.length + 1 }, ...data])
    setIsModalOpen(false)
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-zinc-900 p-4">
      <div className="flex items-center justify-between pb-4">
        <div className="relative">
          <input
            type="text"
            className="block p-2 ps-10 text-sm text-white border border-zinc-600 rounded-lg w-80 bg-zinc-800 placeholder-zinc-400 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for items"
            value={searchTerm}
            onChange={(e) => {
              setCurrentPage(1)
              setSearchTerm(e.target.value)
            }}
          />
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-4 py-2"
        >
          <Plus size={16} />
          Add Connection
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left text-zinc-400">
        <thead className="text-xs text-zinc-200 uppercase bg-zinc-800">
          <tr>
            <th className="px-6 py-3">No</th>
            <th className="px-6 py-3">Connection Name</th>
            <th className="px-6 py-3">Url</th>
            <th className="px-6 py-3">Limiter</th>
            <th className="px-6 py-3">Cors</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-b border-zinc-700 bg-zinc-900 hover:bg-zinc-700 transition cursor-pointer">
              <td className="px-6 py-4 text-white">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4">{item.url}</td>
              <td className="px-6 py-4">{item.rateLimit ? "True" : "False"}</td>
              <td className="px-6 py-4">{item.cors ? "True" : "False"}</td>
              <td className="px-6 py-4">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() => toggleStatus(item.connectionId)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-zinc-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 relative"></div>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 space-x-2 text-sm">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-zinc-800 text-white hover:bg-zinc-700 disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => changePage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-green-500 text-white'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-zinc-800 text-white hover:bg-zinc-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <AddConnection
            onCancel={() => setIsModalOpen(false)}
            onSubmit={handleAddConnection}
          />
        </div>
      )}
    </div>
  )
}

export default Table
