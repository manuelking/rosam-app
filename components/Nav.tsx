import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className="sticky top-0 w-screen py-[24px] px-24 bg-white shadow-lg flex justify-between items-center">
      <Link href="/">
        <Image
          src="/brighterteamlogoalt.png"
          alt="brighterteam logo"
          width={200}
          height={200}
        />
      </Link>
      <Link href="/contact">
        <button className="bg-sun text-cobalt font-semibold text-[18px] py-2 px-10 rounded-full">
          Get a quote
        </button>
      </Link>
    </div>
  )
}

export default Nav
