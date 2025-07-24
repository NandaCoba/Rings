import React from 'react'

const HomeLayouts = () => {
  const routes = [
    { id: 1, name: 'User Service', path: '/api/users', method: 'GET', status: 'active' },
    { id: 2, name: 'Auth Service', path: '/api/auth', method: 'POST', status: 'active' },
    { id: 3, name: 'Payment Service', path: '/api/pay', method: 'POST', status: 'inactive' },
  ]

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">API Gateway Dashboard</h1>
        <p className="text-sm text-gray-400">Monitor and manage your gateway routes</p>
      </header>

      <div className="flex justify-end mb-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
          + Add Route
        </button>
      </div>

      <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-zinc-700">
            <tr>
              <th className="text-left px-6 py-3">#</th>
              <th className="text-left px-6 py-3">Service Name</th>
              <th className="text-left px-6 py-3">Path</th>
              <th className="text-left px-6 py-3">Method</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id} className="border-b border-zinc-700 hover:bg-zinc-700/30 transition">
                <td className="px-6 py-4">{route.id}</td>
                <td className="px-6 py-4">{route.name}</td>
                <td className="px-6 py-4">{route.path}</td>
                <td className="px-6 py-4">{route.method}</td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-medium ${route.status === 'active' ? 'text-green-400' : 'text-red-400'}`}>
                    {route.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-blue-400 hover:underline text-sm">Edit</button>
                  <button className="text-red-400 hover:underline text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomeLayouts
