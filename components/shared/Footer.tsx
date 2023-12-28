import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            // src="/assets/images/logo.svg"
            src="/assets/images/logo.png"
            alt="logo"
            // width={128}
            width={80}
            // height={38}
            height={13}
          />
        </Link>

        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer