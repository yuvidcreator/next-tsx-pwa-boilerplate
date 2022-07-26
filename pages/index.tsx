import type { NextPage } from 'next'
import DynamicTextForPages from '../components/DynamicTextForPages'
import GradientText from '../components/GradientText'
import Head from 'next/head'
import Image from 'next/image'
// import ComingSoon from '@/components/ComingSoon'



const Home: NextPage = () => {

  return (
    <section>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <GradientText text={"Yuvraaj"} />
        <DynamicTextForPages text={"Home Page"} />
      </div>
    </section>
  )
}

export default Home
