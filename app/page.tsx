import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col p-24 w-full">
      <div className="flex flex-row items-center justify-between w-full px-10 h-[500px] bg-ampurple rounded-br-[400px]">
        <div className="px-10">
          <h1 className="text-[64px] font-bold pt-10 text-white">Rosam Care</h1>
          <p>
            Rosam Care Services will be a full-service personal care agency,
            offering domiciliary care direct to customers and providing agency
            staff to NHS Trusts, hospitals, care homes and others.
          </p>
          <button className="w-[180px] h-[50px] bg-white rounded-e-2xl shadow-lg text-ampurple font-semibold">
            Our Services
          </button>
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
      <div className="flex flex-col justify-center items-center pt-24">
        <h1 className="pb-10 text-[32px]">Our Mission</h1>
        <p className="max-w-[900px] text-center">
          Rosam Care, a distinguished provider of specialized case management
          services, is dedicated to offering exceptional support to adults and
          children on their journey of recovery from acquired/traumatic brain
          injuries, spinal or catastrophic injuries, and associated disabilities
          or conditions. At Rosam Care, we prioritize the thoughts and
          expectations of our clients and their families, making them the focal
          point of our approach. We are committed to delivering services that
          not only meet their needs but also exceed their expectations, ensuring
          their well-being and satisfaction. As an independent case management
          company, Rosam Care takes immense pride in our autonomy.
        </p>
      </div>
    </main>
  )
}
