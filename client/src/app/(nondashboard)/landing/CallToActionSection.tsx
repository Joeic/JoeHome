"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const CallToActionSection = () => {
  return (
    <div className='relative py-24'>
      <Image 
        src="/landing-call-to-action.jpg"
        alt="Background"
        fill
        className='object-cover object-center'
      />
      <div className='absolute inset-0 bg-black bg-opacity-60' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='relative z-10 text-center max-w-2xl mx-auto px-6'
      >
        <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
          Find Your Dream Rental Property
        </h2>
        <p className='text-white mb-8'>
          Discover a wide range of rental properties in your desired location.
        </p>
        <div className='flex justify-center gap-4'>
          <button
            className='bg-white text-primary-700 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-md font-semibold transition duration-300'
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Search
          </button>
          <Link
            href="/signup"
            scroll={false}
            className='bg-secondary-500 text-white hover:bg-secondary-600 px-6 py-3 rounded-md font-semibold transition duration-300'
          >
            Sign Up
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default CallToActionSection
