import Link from 'next/link'

const footerLinks = [
  {
    id: 'fc1',
    title: 'Company',
    links: [
      {
        id: 'fc1-l1',
        title: 'title 1',
        link: '/',
      },
      {
        id: 'fc1-l2',
        title: 'title 2',
        link: '/',
      },
      {
        id: 'fc1-l3',
        title: 'title 3',
        link: '/',
      },
    ],
  },
  {
    id: 'fc3',
    title: 'Contact',
    links: [
      {
        id: 'fc3-l1',
        title: 'phone',
        link: '/',
      },
      {
        id: 'fc3-l2',
        title: 'email',
        link: '/',
      },
      {
        id: 'fc3-l3',
        title: 'socials',
        link: '/',
      },
    ],
  },
  {
    id: 'fc2',
    title: 'Legal',
    links: [
      {
        id: 'fc2-l1',
        title: 'title 1',
        link: '/',
      },
      {
        id: 'fc2-l2',
        title: 'title 2',
        link: '/',
      },
      {
        id: 'fc2-l3',
        title: 'title 3',
        link: '/',
      },
    ],
  },
]

function Footer() {
  return (
    <div className="bg-ampurple py-6 flex flex-col w-full mx-auto">
      <div className="flex-row flex justify-between px-24 gap-x-10">
        <div className="flex justify-start items-start">
          <p className="text-white font-bold text-[24px]">Logo</p>
        </div>
        <div className="flex-1 flex flex-row mx-24 items-center justify-between">
          {footerLinks.map((link) => {
            const { id, title } = link
            return (
              <div key={id}>
                <p key={id} className="text-white font-semibold text-[20px]">
                  {title}
                </p>
                {link.links.map((links) => {
                  const { id, title, link } = links
                  return (
                    <div key={id} className="flex flex-col">
                      <Link key={id} href={link} className="text-white">
                        {title}
                      </Link>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <hr className="mx-24 my-6" />
      <div className="flex items-center justify-center">
        <p className="text-white font-thin">&copy;Rosam Care Services Ltd.</p>
      </div>
    </div>
  )
}

export default Footer
