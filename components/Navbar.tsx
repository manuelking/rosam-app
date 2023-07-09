'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  {
    id: 'nvl1',
    title: 'Home',
    link: '/',
  },
  {
    id: 'nvl3',
    title: 'Why Choose Us?',
    link: '/why-us',
  },
  {
    id: 'nvl4',
    title: 'Our Services',
    link: '/services',
    drop: [
      {
        id: 'nvl4-drp1',
        title: 'Companionship Services',
        link: '/services/companionship',
      },
      {
        id: 'nvl4-drp2',
        title: 'Home Help Services',
        link: '/services/home-help',
      },
      {
        id: 'nvl4-drp2',
        title: 'Personal Care Services',
        link: '/services/personal-care',
      },
    ],
  },
  {
    id: 'nvl5',
    title: 'Quality',
    link: '/quality',
  },
  {
    id: 'nvl7',
    title: 'Contact Us',
    link: '/contact',
  },
]

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [toggleS, setToggleS] = useState(false)
  return (
    <div className="sticky top-0 w-full py-[24px] bg-white shadow-lg flex justify-between items-center">
      <div className="flex absolute justify-start items-start ml-10">
        <p className="text-[54px] font-bold">Lo</p>
      </div>
      <div className="sm:flex hidden justify-center items-center mx-auto">
        <ul className="flex-row flex text-ampurple font-medium">
          {navLinks.map((nav) =>
            nav.drop ? (
              <li key={nav.id} className="group mx-4 py-[12px]">
                <Link href={nav.link}>{nav.title}</Link>
                <div className="hidden group-hover:block absolute inset-x-0 mx-auto top-[70px] w-full max-w-[900px] bg-white rounded-b-2xl shadow-xl">
                  <ul className="text-ampurple p-8">
                    {nav.drop.map((drop) => (
                      <li key={drop.id} className="py-[10px] mx-10">
                        <Link href={drop.link}>{drop.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={nav.id} className="mx-4 py-[12px]">
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="sm:hidden flex justify-end items-center mx-auto mr-10 z-20">
        <Image
          src={toggle ? '/x-mark.svg' : '/menu-amp.svg'}
          alt="Menu"
          width={30}
          height={30}
          className="z-30"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className="absolute inset-x-0 mx-4 top-[78px] max-w-[500px] rounded-b-2xl shadow-xl z-30 bg-ampurple p-8">
          <ul className="flex flex-col text-white">
            {navLinks.map((nav) =>
              nav.drop ? (
                <li key={nav.id}>
                  <div
                    className="flex flex-row gap-x-2 items-center"
                    onClick={() => setToggleS((prev) => !prev)}
                  >
                    <p>{nav.title}</p>
                    <Image
                      src={toggleS ? '/chev-down.svg' : '/chev-up.svg'}
                      alt="Chevron"
                      width={20}
                      height={20}
                    />
                  </div>
                  <ul className={`${toggleS ? 'hidden' : 'flex'} flex-col`}>
                    <li className="text-[14px]">
                      <Link href="/services">All Services</Link>
                    </li>
                    {nav.drop.map((drop) => (
                      <li key={drop.id} className="text-[14px]">
                        <Link href={drop.link}>{drop.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={nav.id}>
                  <Link href={nav.link}>{nav.title}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
