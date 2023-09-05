'use client'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const GTM_ID = 'GTM-KJZ49LH6' // Replace with your GTM container ID

function Analytics() {
  useEffect(() => {
    // Initialize Google Tag Manager
    const tagManagerArgs = {
      gtmId: GTM_ID,
    }

    TagManager.initialize(tagManagerArgs)
  }, [])

  return null
}

export default Analytics
