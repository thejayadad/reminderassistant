import getServerUser from "@/lib/getServerUser"

import React from 'react'

const HomePage = async () => {
  const user = await getServerUser()
  console.log("User " + user.name)
  return (
    <section className="px-4 py-8">
      <div className="flex max-w-screen-xl mx-auto">
      <span>Welcome, {user.name}</span>
      </div>
    </section>
  )
}

export default HomePage