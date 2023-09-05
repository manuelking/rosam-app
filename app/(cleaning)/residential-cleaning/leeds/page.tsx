import Service from '@/components/Service'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title:
    'Residential Cleaning Services in Leeds, West Yorksire | Brighter Team',
  description:
    'Transform your home into a pristine oasis with our trusted residential cleaning services in Leeds. Our professional cleaners deliver impeccable results, ensuring a clean and healthy living space in West Yorkshire. Schedule your cleaning today!',
}

function page() {
  return (
    <div className="flex flex-col justify-center">
      {/* new banner */}

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
        <div className="absolute bg-white rounded-sm xs:p-16 p-6 py-10 shadow-lg lg:left-1/3 left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/5 space-y-6 max-w-[700px]">
          <h1 className="text-cobalt font-bold sd:text-[64px] xxs:text-[54px] text-[44px]">
            Residential Cleaning Leeds
          </h1>
          <p className="font-light text-neutral-500">
            Choose Brighter Team Cleaning for all your cleaning needs. We offer
            a wide range of cleaning services, and our professional, dedicated
            team is committed to delivering a pristine environment that shines
            with brilliance. Say goodbye to dust, grime, and clutter, and
            welcome a brighter space.
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

      {/* banner */}
      {/* <div className="flex lg:flex-row flex-col justify-between gap-x-6 lg:gap-y-0 gap-y-8 lg:pt-0 pt-6 md:px-24 xxs:px-14 px-6 pb-24">
        <div className="flex-1 flex flex-col justify-center gap-y-6">
          <h1 className="text-cobalt font-bold sd:text-[64px] xxs:text-[54px] text-[44px]">
            Residential Cleaning Leeds
          </h1>
          <p className="font-light text-neutral-500">
            Choose Brighter Team Cleaning for all your cleaning needs. We offer
            a wide range of cleaning services and our professional, dedicated
            team is committed to delivering a pristine environment that shines
            with brilliance. Say goodbye to dust, grime, and clutter, and
            welcome a brighter space.
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
        <h1 className="text-cobalt text-[34px] font-semibold text-left">
          Cleaning services we offer
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-500 hover:text-cobalt">
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
              <p className="">
                Experience a new level of cleanliness with our comprehensive
                standard cleaning service. Our expert team meticulously tends to
                every corner, ensuring a pristine and refreshing environment
                that exceeds expectations.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-500 hover:text-cobalt">
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
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-500 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/keysicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">
                End of Tenancy cleaning
              </h1>
              <p>
                Ensure a seamless transition with our end of tenancy cleaning
                service. Our meticulous team restores every nook and cranny,
                leaving your space immaculate and ready for its next chapter.
                Leave behind the worries, step into a fresh beginning.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-500 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/movingicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">
                Move-In/Move-Out cleaning
              </h1>
              <p>
                Experience a smooth move with our specialized cleaning service.
                Whether you're moving in or moving out, our dedicated team
                ensures a spotless and welcoming space, so you can embark on
                your new journey with a fresh start. Leave the cleaning to us
                and focus on making memories.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-500 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/tripicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">
                Accommodation cleaning
              </h1>
              <p>
                Experience consistent comfort with our accommodation cleaning
                service. After each stay, our diligent team ensures every corner
                is meticulously cleaned and refreshed, providing a spotless and
                inviting space for your next guest. Elevate your accommodations
                with our reliable and thorough cleaning, ensuring every visitor
                enjoys a memorable and impeccable stay.
              </p>
            </div>
          </div>

          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-500 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/eco.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">
                Eco-friendly cleaning
              </h1>
              <p>
                Embrace a cleaner future with our eco-friendly cleaning service.
                Our dedicated team uses sustainable practices and non-toxic
                products to create a fresh, healthy environment. Experience a
                spotless clean that's gentle on both your space and the planet.
                Choose responsible cleaning for a greener tomorrow.
              </p>
            </div>
          </div>
          <div className="flex xs:flex-row flex-col gap-x-10 rounded-lg p-6 text-neutral-500 hover:text-cobalt">
            <div className="flex xs:justify-center xs:items-center items-start">
              <Image
                src="/clothesicon.png"
                alt="Cleaning icon"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-1 flex-col">
              <h1 className="font-semibold text-[24px]">Laundry and Ironing</h1>
              <p>
                Experience effortless freshness with our laundry and ironing
                service. Our skilled team handles your garments with care,
                ensuring they're meticulously cleaned, expertly ironed, and
                ready to wear. Enjoy the convenience of perfectly pressed
                clothes without the hassle. Elevate your wardrobe with our
                impeccable touch
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
            and its surrounding neighborhoods. Our dedicated cleaning team is
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
