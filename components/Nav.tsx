import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className="sticky top-0 w-screen py-[24px] ss:px-24 xxs:px-10 px-4 bg-white shadow-lg flex justify-between items-center">
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <Image
            src="/brighterteamlogoalt.png"
            alt="brighterteam logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <Link href="/contact">
          <button className="bg-sun text-cobalt font-semibold xxs:text-[18px] text-[14px] py-2 xs:px-10 px-4 rounded-full">
            Get a quote
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Nav
