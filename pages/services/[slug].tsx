import DynamicTextForPages from '@/components/DynamicTextForPages'
import GradientText from '@/components/GradientText'
import SeoMetas from '@/components/SeoMetas'
import {useRouter} from 'next/router'

const Services = () => {
    const router = useRouter()
    const { slug } = router.query

    const meta = {
      title: "Web Development | WebinoxMedia",
      description: "WebinoxMedia - The Best Web Development Company in Pune.",
      keywords: "WebinoxMedia, Web Development, Ecommerce Web Development, React JS Developer, Python Django Developer, Next JS Developer",
      image: "/image.png",
    }

    return (
        <div className="flex flex-col justify-center text-center items-center min-h-screen p-4">
            <SeoMetas 
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                image={meta.image}
                pageslug={router.asPath}
            />
            <GradientText text={"Your Query Blog slug is"} />
            <DynamicTextForPages text={`slug: /${slug}`} />
        </div>
    )
}

export default Services