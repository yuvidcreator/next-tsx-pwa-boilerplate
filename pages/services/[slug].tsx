import {useRouter} from 'next/router'

const Services = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>Services slug: {slug}</div>
    )
}

export default Services