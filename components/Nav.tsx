'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Nav() {
  return (
    <div className="sticky top-0 w-screen py-[24px] ss:px-24 xxs:px-10 px-4 bg-white shadow-lg flex justify-between items-center z-20">
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
        {/* <Link href="tel:01138730647" className="xs:hidden flex">
          <button className="bg-sun text-cobalt font-semibold xxs:text-[18px] text-[12px] py-2 xs:px-7 px-5 rounded-full flex flex-row items-center gap-2">
            <Image src="/phone.svg" alt="phone icon" width={18} height={18} />
            <p>Get a quote</p>
          </button>
        </Link> */}
        <Link href="/get-a-quote">
          <button className="bg-sun text-cobalt font-semibold xxs:text-[18px] text-[14px] py-2 xs:px-10 px-4 rounded-full">
            Get a quote
          </button>
        </Link>
        {/* )} */}
      </div>
    </div>
  )
}

export default Nav
