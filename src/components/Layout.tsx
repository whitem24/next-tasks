import React from 'react'

interface layoutProps {
    children: React.ReactNode
}
const Layout = ({children}:layoutProps) => {
  return (
    <div className="container mx-auto px-4 py-10">
        {children}
    </div>
  )
}

export default Layout