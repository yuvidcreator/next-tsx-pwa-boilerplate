import DynamicTextForPages from '../components/DynamicTextForPages'
import GradientText from '../components/GradientText'
import Head from 'next/head'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <GradientText text={"Yuvraaj"} />
      <DynamicTextForPages text={"About Page"} />
    </div>
  )
}

export default About