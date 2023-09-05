'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

function page() {
  useEffect(() => {
    redirect('/residential-cleaning/leeds')
  }, [])

  return null
}

export default page
