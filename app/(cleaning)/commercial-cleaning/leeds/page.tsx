import Service from '@/components/Service'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Commercial Cleaning Services in Leeds, West Yorksire | Brighter Team',
  description:
    "Elevate your business's cleanliness with our trusted commercial cleaning services in Leeds. Our expert team delivers spotless results for offices and businesses in West Yorkshire. Contact us for a sparkling workplace today!",
}

function page() {
  return (
    <div className="flex flex-col justify-center ">
      {/* banner */}
      <div className="flex w-full relative pb-24">
        <div className="w-screen relative">
          <Image
            src="/cleanstaff4.jpg"
            alt="Caregiver"
            width={500}
            height={500}
            priority
            className="w-full h-screen brightness-50"
            sizes="100vw"
            style={{ objectPosition: 'center', objectFit: 'cover' }}
          />
        </div>
        <div className="absolute bg-white rounded-sm xs:p-16 p-6 py-10 shadow-lg lg:left-1/3 left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/5 space-y-6 max-w-[700px] sm:min-w-[700px] xs:min-w-[500px] xxs:min-w-[400px] xx:min-w-[330px] min-w-[280px]">
          <h1 className="text-cobalt font-bold sd:text-[44px] xxs:text-[24px] text-[24px]">
            Fully Insured Commercial Cleaning In Leeds
          </h1>
          <p className="text-cobalt">
            and surrounding areas: Bradford, Wakefield, Castleford, Huddersfield
            and beyond.
          </p>
          <p className="font-light text-neutral-500 ">
            Elevate your workspace with our top-tier commercial cleaning
            service. Our professional team ensures a pristine and inviting
            environment that leaves a lasting impression on clients and
            employees alike. From offices to retail spaces, we create a polished
            atmosphere that enhances productivity and success.
          </p>
          <button className="w-[200px] h-[50px] bg-sun rounded-full shadow-lg text-cobalt font-semibold text-[20px]">
            <Link
              href="https://contact.brighterteam.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a quote
            </Link>
          </button>
        </div>
      </div>

      {/* <div className="flex lg:flex-row flex-col justify-between pb-24 gap-x-6 lg:gap-y-0 gap-y-8 lg:pt-0 pt-6">
        <div className="flex-1 flex flex-col justify-center gap-y-6">
          <h1 className="text-cobalt font-bold sd:text-[60px] xxs:text-[54px] text-[44px]">
            Commercial Cleaning Leeds
          </h1>
          <p className="font-light text-gray-500">
            Elevate your workspace with our top-tier commercial cleaning
            service. Our professional team ensures a pristine and inviting
            environment that leaves a lasting impression on clients and
            employees alike. From offices to retail spaces, we create a polished
            atmosphere that enhances productivity and success. Experience the
            difference of a truly clean business space.
          </p>
          <button className="w-[200px] h-[50px] bg-sun rounded-full shadow-lg text-cobalt font-semibold text-[20px]">
            <Link
              href="https://contact.brighterteam.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a quote
            </Link>
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/cleanstaff4.jpg"
            alt="Caregiver"
            width={500}
            height={500}
            priority
            className="w-full"
          />
        </div>
      </div> */}

      {/* services */}
      <div className="flex flex-col gap-y-6 md:px-24 xxs:px-14 px-6 pb-12">
        <h1 className="text-cobalt text-[34px] font-bold text-left">
          Cleaning services we offer
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-600 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/wipeicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">Standard cleaning</h1>
              <p>
                Experience a new level of cleanliness with our comprehensive
                standard cleaning service. Our expert team meticulously tends to
                every corner, ensuring a pristine and refreshing environment
                that exceeds expectations.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-600 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/cleaningicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">Deep cleaning</h1>
              <p>
                Elevate your surroundings with our thorough deep cleaning
                service. Our skilled team goes beyond the surface, tackling
                hidden grime and revitalizing your space to its purest state.
                Experience a truly rejuvenated and immaculate environment.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-600 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/eventicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">
                Special Events cleaning
              </h1>
              <p>
                Make your special moments shine with our event cleaning service.
                Our attentive team transforms your venue, ensuring every detail
                sparkles and impresses. From setup to teardown, we create a
                pristine backdrop, allowing you to celebrate without a worry.
                Let us make your event unforgettable, one clean corner at a
                time.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-600 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/warehouseicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">Industrial cleaning</h1>
              <p>
                Unleash the power of pristine with our industrial cleaning
                service. Our specialized team tackles the toughest challenges,
                restoring your industrial space to optimal conditions. From
                factories to warehouses, we ensure safety and efficiency while
                maintaining a clean and organized environment. Trust us to
                elevate your industrial standards, one thorough clean at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* coverage */}
      <div className="bg-neutral-100 flex sd:flex-row flex-col w-screen py-12 md:px-24 xxs:px-14 px-6 gap-x-6 gap-y-6">
        <div className="flex items-start justify-start">
          <h1 className="text-cobalt text-[34px] font-semibold">Coverage</h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <p className="text-center max-w-[1000px] text-neutral-500">
            At Brighter Team, we're proud to serve the beautiful city of Leeds
            and its surrounding neighbourhoods. Our dedicated cleaning team is
            committed to delivering exceptional service throughout this vibrant
            community.
          </p>
        </div>
      </div>

      {/* image section */}
      <div className="w-screen overflow-hidden relative flex items-center justify-center">
        <Image
          src="/apt1.jpg"
          alt="Cleaned Apartment"
          width={200}
          height={200}
          className="w-full md:h-[300px] ss:h-[350px] xx:h-[500px] h-[550px] brightness-50"
          sizes="100vw"
          style={{ objectPosition: 'center', objectFit: 'cover' }}
        />
        <div className="absolute text-center max-w-[1000px] mx-4">
          <h1 className="text-white md:text-[34px] text-[24px] text-semibold pb-3">
            Discover Our Exceptional Cleaning Service
          </h1>
          <hr />
          <p className="text-white pt-3">
            At Brighter Team, our dedicated cleaners are the heart and soul of
            our service. With a passion for perfection and an eye for detail,
            our team transforms your home into a spotless sanctuary. We take
            pride in our expertise, using eco-friendly products to deliver
            top-notch cleaning tailored to your unique needs. Experience the joy
            of walking into a beautifully cleaned home, knowing that your
            satisfaction is our top priority. Brighter Team – where cleanliness
            meets care.
          </p>
        </div>
      </div>

      {/* why us? section */}
      <div className="flex flex-col bg-neutral-100 py-12 gap-y-12 md:px-24 xxs:px-14 px-6">
        <div className="flex flex-col items-center justify-center gap-y-6">
          <h1 className="text-cobalt text-[34px] font-semibold">
            What sets us apart?
          </h1>
          <p className="text-neutral-500">
            At Brighter Team, we're dedicated to making your home shine. Here's
            why you should trust us:
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 items-center justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/qualityicon.png"
              alt="Quality icon"
              width={100}
              height={100}
              className="pb-6"
            />
            <h1 className="text-cobalt font-semibold text-[20px]">
              Quality Assurance
            </h1>
            <p className="text-center text-neutral-500">
              We deliver top-notch cleaning services.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/professionalicon.png"
              alt="Trained Professional icon"
              width={100}
              height={100}
              className="pb-6"
            />
            <h1 className="text-cobalt font-semibold text-[20px]">
              Trained Professionals
            </h1>
            <p className="text-center text-neutral-500">
              Our expert team is highly trained and experienced.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/cleaningicon.png"
              alt="Cleaning icon"
              width={100}
              height={100}
              className="pb-6"
            />
            <h1 className="text-cobalt font-semibold text-[20px]">
              Customized Cleaning
            </h1>
            <p className="text-center text-neutral-500">
              We tailor our services to meet your unique needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/eco.png"
              alt="Eco icon"
              width={100}
              height={100}
              className="pb-6"
            />
            <h1 className="text-cobalt font-semibold text-[20px]">
              Eco-Friendly Products
            </h1>
            <p className="text-center text-neutral-500">
              We use environmentally friendly cleaning products.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/satisfactionicon.png"
              alt="Satisfaction icon"
              width={100}
              height={100}
              className="pb-6"
            />
            <h1 className="text-cobalt font-semibold text-[20px]">
              Satisfaction Guarantee
            </h1>
            <p className="text-center text-neutral-500">
              Your happiness is our priority.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/timeicon.png"
              alt="Time icon"
              width={100}
              height={100}
              className="pb-6"
            />
            <h1 className="text-cobalt font-semibold text-[20px]">
              Time and Availability
            </h1>
            <p className="text-center text-neutral-500">
              Cleaning that meets your schedule and needs.
            </p>
          </div>
        </div>
      </div>

      {/* cta */}
      <div className="bg-white flex md:flex-row flex-col justify-center w-full md:px-24 xxs:px-14 px-6 gap-x-24 md:gap-y-0 gap-y-8 py-10">
        <div className="flex flex-col justify-center">
          <p className="text-cobalt font-light md:text-[16px] text-[14px] md:text-left text-center">
            Experince the Difference with Brighter Team - Your Staffing
            Solution!
          </p>
          <h1 className="text-cobalt font-semibold sd:text-[34px] text-[24px] md:text-left text-center">
            Partner with brighter team today
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Link
            href="https://contact.brighterteam.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[250px] h-[50px] bg-sun rounded-full shadow-lg text-cobalt font-semibold text-[20px]">
              Get a quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
