import DynamicTextForPages from '../components/DynamicTextForPages'
import GradientText from '../components/GradientText'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import SeoMetas from '@/components/SeoMetas'

const PrivacyPolicy = () => {
  const router = useRouter();

  const meta = {
    title: "Privacy Policy | WebinoxMedia",
    description: "WebinoxMedia - The Best Web Development Company in Pune.",
    keywords: "WebinoxMedia, Web Development, Ecommerce Web Development, React JS Developer, Python Django Developer, Next JS Developer",
    image: "/image.png",
  }
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <SeoMetas 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        image={meta.image}
        pageslug={router.asPath}
      />
      <GradientText text={"Yuvraaj"} />
      <DynamicTextForPages text={"Privacy Page"} />
    </div>
  )
}

export default PrivacyPolicy