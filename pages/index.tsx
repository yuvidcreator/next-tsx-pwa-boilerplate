import type { NextPage } from 'next'
import { useRouter } from "next/router";
import DynamicTextForPages from '../components/DynamicTextForPages'
import GradientText from '../components/GradientText'
import Head from 'next/head'
import Image from 'next/image'
import SeoMetas from '@/components/SeoMetas'
// import ComingSoon from '@/components/ComingSoon'





const Home: NextPage = () => {
  const router = useRouter();

  const meta = {
    title: "WebinoxMedia",
    description: "WebinoxMedia - The Best Web Development Company in Pune.",
    keywords: "WebinoxMedia, Web Development, Ecommerce Web Development, React JS Developer, Python Django Developer, Next JS Developer",
    image: "/image.png",
  }

  return (
    <section>
      <SeoMetas 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        image={meta.image}
        pageslug={router.asPath}
      />
      <Head>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <GradientText text={"Yuvraaj"} />
        <DynamicTextForPages text={"Home Page"} />
        
      </div>
    </section>
  )
}

export default Home

