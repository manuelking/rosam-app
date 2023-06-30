import Link from 'next/link'

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

// CHANGE PADDING FOR NAV LINKS SO IT DOESNT CLOSE DROP WHEN YOU MOVE MOUSE SIDEWAYS

function Navbar() {
  return (
    <div className="fixed w-full h-24 bg-white shadow-lg flex justify-between items-center">
      <div className="flex absolute justify-start items-start ml-10">
        <p className="text-[54px] font-bold">Logo</p>
      </div>
      <div className="flex justify-center items-center mx-auto">
        <ul className="flex-row flex text-ampurple font-medium">
          {navLinks.map((nav) =>
            nav.drop ? (
              <li key={nav.id} className="group mx-4 py-[10px]">
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
              <li key={nav.id} className="mx-4 py-[10px]">
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            )
          )}
        </ul>
      </div>
      {/* <div className="fixed inset-x-0 mx-auto top-20 w-full max-w-[900px] bg-ampurple">
        <p className="text-white text-center">Hello</p>
      </div> */}
    </div>
  )
}

export default Navbar
