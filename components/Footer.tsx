import { Business } from "@/lib/Web";
import Link from "next/link";


const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="mb-20 lg:mb-0">
      <div className="flex justify-center items-center text-center lg:mb-4">
        <div>
          <p>
            {fullYear} &copy; {Business.site_name} 
          </p>
          <p>
              Designed & Developed by{' '}<br className="md:hidden" />
              <Link href="https://www.webinoxmedia.com" passHref>
                <a className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:from-violet-500 dark:to-pink-500">Yuvraj Limbole</a>
              </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer