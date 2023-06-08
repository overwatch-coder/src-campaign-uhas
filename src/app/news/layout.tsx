import React from 'react'

export const metadata = {
    title: "News Details | JFSRC"
}

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default layout