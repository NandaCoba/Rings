import axios from 'axios'
import React, { useState } from 'react'
import { api } from '../../utils/api'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie'

const AddConnection = ({ onCancel }) => {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [useLimiter, setUseLimiter] = useState(false)
  const [limiterValue, setLimiterValue] = useState(null)
  const [limiterUnit, setLimiterUnit] = useState('')
  const userId = Cookies.get("token")

  const [useCors, setUseCors] = useState(false)
  const [corsUrls, setCorsUrls] = useState([''])

  const [isActive, setIsActive] = useState(true)

  const handleCorsUrlChange = (index, value) => {
    const updated = [...corsUrls]
    updated[index] = value
    setCorsUrls(updated)
  }



  const removeCorsUrl = (index) => {
    const updated = [...corsUrls]
    updated.splice(index, 1)
    setCorsUrls(updated)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const limiter = useLimiter
      ? { value: limiterValue, unit: limiterUnit }
      : null

    const cors = useCors ? corsUrls.filter((url) => url.trim() !== '') : null

    const newConnection = {
      name,
      url,
      limiter,
      cors,
      isActive,
    }

    console.log('Connection created:', newConnection)
    onCancel()
  }


  const handleCreateConnection = async () => {

    try {
      const response = await axios.post(`${api}/connection`,{ name,url,cors : useCors,rateLimit : useLimiter,totalTimeLimit : Number(limiterValue),whenTimeLimit : limiterUnit }, {
        headers :{
          Authorization : `Bearer ${userId}`
        }
      })
      toast.success("Successful create connection")

      if(useCors === false) {
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      } 
      else if (useCors === true) { 
        for (const items of corsUrls) {          
          await axios.post(`${api}/connection/cors_connection`, { connectionId : response.data.data.connectionId,urlCors : items },{
            headers : {
              Authorization : `Bearer ${userId}`
            }
          })
        }
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      }
    } catch (error) {
      console.error(error)
    }
  }

const addCorsUrl = async () => {
    try {
      setCorsUrls([...corsUrls, ''])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="bg-zinc-800 rounded-2xl shadow-md p-6 w-full max-w-2xl mx-auto space-y-6 relative">
      <h2 className="text-2xl font-semibold text-white">Add New Connection</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-sm text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter connection name"
          />
        </div>

        {/* URL */}
        <div>
          <label className="block text-sm text-white">URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="https://example.com/api"
          />
        </div>

        {/* Limiter Toggle */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useLimiter}
            onChange={(e) => setUseLimiter(e.target.checked)}
            className="accent-green-500"
          />
          <label className="text-white">Use Limiter</label>
        </div>

        {/* Limiter Fields */}
        {useLimiter && (
          <div className="flex gap-4">
            <input
              type="number"
              value={limiterValue}
              onChange={(e) => setLimiterValue(e.target.value)}
              className="w-1/2 px-4 py-2 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Value"
            />
            <select
              value={limiterUnit}
              onChange={(e) => setLimiterUnit(e.target.value)}
              className="w-1/2 px-4 py-2 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="second">per Second</option>
              <option value="minute">per Minute</option>
              <option value="hour">per Hour</option>
              <option value="day">per Day</option>
              <option value="month">per Month</option>
              <option value="year">per Year</option>
            </select>
          </div>
        )}

        {/* CORS Toggle */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useCors}
            onChange={(e) => setUseCors(e.target.checked)}
            className="accent-green-500"
          />
          <label className="text-white">Enable CORS</label>
        </div>

        {/* CORS Fields */}
        {useCors && (
          <div className="space-y-2">
            {corsUrls.map((corsUrl, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={corsUrl}
                  onChange={(e) => handleCorsUrlChange(index, e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="https://allowed-origin.com"
                />
                {corsUrls.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCorsUrl(index)}
                    className="text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addCorsUrl}
              className="text-green-400 hover:text-green-600 text-sm"
            >
              + Add CORS URL
            </button>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-zinc-600 hover:bg-zinc-700 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateConnection}
            type="submit"
            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white"
          >
            Save Connection
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddConnection
