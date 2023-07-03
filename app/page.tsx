'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col mx-auto px-24 pb-24 w-full">
      <div className="flex flex-row items-center justify-between w-full px-10 h-[500px] bg-ampurple rounded-br-[400px]">
        <div className="px-10 space-y-6">
          <h1 className="text-[94px] font-bold text-white">Rosam Care</h1>
          <p className="text-white max-w-[600px] font-light">
            Introducing Rosam Care Services, your trusted partner in personal
            care. As a full-service personal care agency, we are committed to
            delivering exceptional care to our valued clients. Whether you
            require domiciliary care in the comfort of your own home or seek
            dedicated agency staff for healthcare facilities, we have you
            covered.
          </p>
          <div>
            <Link href="/services">
              <motion.button
                initial={{ x: -800 }}
                animate={{ x: 0 }}
                transition={{ delay: 1 }}
                className="w-[200px] h-[50px] bg-white rounded-e-2xl shadow-lg text-ampurple font-semibold"
              >
                Explore our services
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="px-20 overflow-hidden rounded-br-[342px]">
          <Image
            src="/rsc-img2nb.png"
            alt="Nurse caregiver"
            width={330}
            height={100}
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-24 gap-y-24">
        <div className="flex flex-row items-center justify-between w-full max-w-[1200px] gap-x-16">
          <div className="flex-1">
            <h1 className="text-[64px] font-bold text-ampurple text-center">
              Excellence
            </h1>
            <p className="max-w-[600px] font-light">
              The cornerstone of our services at Rosam Care Services is
              excellence. We strive for nothing less than the highest standards
              of care, ensuring that each interaction with our clients is
              characterized by professionalism, expertise, and attention to
              detail. Our team of caregivers and healthcare professionals is
              dedicated to continuous learning and improvement, staying
              up-to-date with the latest best practices to deliver exceptional
              care that exceeds expectations.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img1.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-between w-full max-w-[1200px] gap-x-16">
          <div className="flex-1">
            <h1 className="text-[64px] font-bold text-ampurple text-center">
              Reliability
            </h1>
            <p className="max-w-[600px] font-light">
              At the core of our operations is reliability. We understand the
              importance of consistency and dependability in providing care
              services. Our clients and partner organizations can trust us to be
              there when we are needed, without fail. We uphold our commitments
              and honor our agreements, ensuring that our clients receive the
              care they require, precisely when they need it. With Rosam Care
              Services, reliability is not just a promise—it's a fundamental
              value we uphold every day.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img3.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full max-w-[1200px] gap-x-16">
          <div className="flex-1">
            <h1 className="text-[64px] font-bold text-ampurple text-center">
              Personalised
            </h1>
            <p className="max-w-[600px] font-light">
              Personalized care lies at the heart of what we do. We recognize
              that each individual has unique needs and preferences, and we
              tailor our services accordingly. Our compassionate caregivers take
              the time to understand our clients' specific requirements,
              enabling us to provide customized care plans that address their
              physical, emotional, and social well-being. We believe that
              personalized care fosters a trusting relationship between our
              caregivers and clients, ensuring a comfortable and supportive
              environment for all.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/rsc-img1.jpg"
              alt="Caregiver"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full py-10 px-24">
        <div className="flex flex-col justify-center">
          <p className="text-ampurple font-light">
            Find the right care for you today with Rosam Care
          </p>
          <h1 className="text-ampurple font-bold text-[60px]">
            Discover Our Care solutions
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/services">
            <motion.button
              initial={{ x: 800 }}
              animate={{ x: 0 }}
              transition={{ delay: 1 }}
              className="w-[200px] h-[50px] bg-ampurple rounded-2xl shadow-lg text-white font-semibold text-[20px]"
            >
              Services
            </motion.button>
          </Link>
        </div>
      </div>
    </main>
  )
}
