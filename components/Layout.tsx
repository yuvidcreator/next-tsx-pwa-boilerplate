import React, { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const Layout = ({children, ...props}: Props) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout