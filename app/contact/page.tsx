'use client'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

function Page() {
  useEffect(() => {
    redirect('/get-a-quote')
  }, [])
  return null
}

export default Page
