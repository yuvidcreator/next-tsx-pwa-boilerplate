import DynamicTextForPages from '@/components/DynamicTextForPages'
import GradientText from '@/components/GradientText'
import {useRouter} from 'next/router'

const Services = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <GradientText text={"Your Query Blog slug is"} />
            <DynamicTextForPages text={`slug: /${slug}`} />
        </div>
    )
}

export default Services