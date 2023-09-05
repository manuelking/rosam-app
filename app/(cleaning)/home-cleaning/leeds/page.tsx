'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

function Page() {
  useEffect(() => {
    redirect('/residential-cleaning/leeds')
  }, [])

  return null
}

export default Page
