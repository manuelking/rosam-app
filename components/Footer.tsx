import Link from 'next/link'

const footerLinks = [
  {
    id: 'fc1',
    title: 'Company',
    links: [
      {
        id: 'fc1-l1',
        title: 'About',
        link: '/why-us',
      },
      {
        id: 'fc1-l2',
        title: 'Careers',
        link: '/',
      },
      {
        id: 'fc1-l3',
        title: 'FAQs',
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
        title: '0113 967 8344',
        link: '/',
      },
      {
        id: 'fc3-l2',
        title: 'Enquire',
        link: '/contact',
      },
    ],
  },
]

function Footer() {
  return (
    <div className="bg-ampurple py-6 flex flex-col w-screen mx-auto">
      <div className="flex-row flex justify-between md:px-24 xxs:px-14 px-6 gap-x-10">
        <div className="flex justify-start items-start">
          <p className="text-white font-bold text-[24px]">Logo</p>
        </div>
        <div className="flex-1 flex ss:flex-row flex-col items-start justify-between ll:px-[150px] lg:px-[100px] md:px-[50px] sm:px-[20px] px-0 sm:gap-x-24 gap-x-8 ss:gap-y-0 gap-y-8 ss:pl-0 xs:pl-20 xxs:pl-10 pl:0">
          {footerLinks.map((link) => {
            const { id, title } = link
            return (
              <div key={id} className="flex xx:flex-row flex-col gap-x-10">
                <p
                  key={id}
                  className="text-white font-semibold md:text-[34px] xxs:text-[24px] text-[18px]"
                >
                  {title}
                </p>
                <div className="flex flex-col">
                  {link.links.map((links) => {
                    const { id, title, link } = links
                    return (
                      <div
                        key={id}
                        className="md:text-[20px] xxs:text-[16] text-[14px] py-2"
                      >
                        <Link key={id} href={link} className="text-white">
                          {title}
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <hr className="md:mx-24 xxs:mx-14 mx-6 my-6" />
      <div className="flex items-center justify-center">
        <p className="text-white font-thin">&copy;Brighter Team Ltd.</p>
      </div>
    </div>
  )
}

export default Footer
