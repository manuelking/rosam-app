import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    id: 'fc1',
    title: 'company',
    links: [
      {
        id: 'fc1-l1',
        title: 'About',
        link: '/about',
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
    title: 'contact',
    links: [
      {
        id: 'fc3-l1',
        title: '0113 873 0647',
        link: 'tel:01138730647',
      },
      {
        id: 'fc3-l2',
        title: 'Enquire',
        link: '/contact',
      },
    ],
  },
]

// ll:gap-x-44 lg:gap-x-48 gap-x-52

function Footer() {
  return (
    <div>
      <div className="bg-sun py-6 flex flex-col w-screen mx-auto">
        <div className="sm:flex-row flex-col flex justify-between xl:px-24 lg:px-16 md:px-8 px-4 sm:gap-y-0 gap-y-10">
          <div className="flex justify-start items-start">
            <Image
              src="/brighterteamlogo.png"
              alt="Brighter Logo"
              width={200}
              height={200}
              className=""
            />
          </div>
          <div className="flex-1 flex sm:flex-row flex-col sm:items-start items-center justify-between ll:pl-[140px] lg:pl-[100px] md:pl-[50px] sd:pl-[200px] pl-0 pr-10 lg:gap-x-24 gap-x-8 sd:gap-y-0 gap-y-8 ss:pl-0 xs:pl-20 xxs:pl-10 pl:0">
            {footerLinks.map((link) => {
              const { id, title } = link
              return (
                <div key={id} className="flex xx:flex-row flex-col gap-x-10">
                  <p
                    key={id}
                    className="text-cobalt font-semibold md:text-[34px] xxs:text-[24px] text-[18px]"
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
                          <Link key={id} href={link} className="text-cobalt">
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
      </div>
      <div className="bg-cobalt py-2 flex items-center justify-center">
        <p className="text-sun font-extralight">&copy;Brighter Team Ltd.</p>
      </div>
    </div>
  )
}

export default Footer
