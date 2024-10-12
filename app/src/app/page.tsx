"use client"

import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { motion } from 'framer-motion'
import { Spotlight } from '@/components/ui/spotlight'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface Feature {
  logo: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variants?: any;
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const features: Feature[] = [
  {
    logo: 'hammer-and-wrench-svgrepo-com',
    title: 'Project Creation Made Easy',
    description: 'Launch your project in minutes with our intuitive form. Set goals, define milestones, and start your fundraising journey.'
  },
  {
    logo: 'money-bag-svgrepo-com',
    title: 'Secure Fund Management',
    description: 'Funds are locked in smart contracts and released only when milestones are met, ensuring full transparency and security.'
  },
  {
    logo: 'bar-chart-svgrepo-com',
    title: 'Investor Voting Power',
    description: 'Investors hold governance tokens and vote on project milestones to release funds, giving the community control over project success.'
  },
  {
    logo: 'lightning-lightning-svgrepo-com',
    title: 'Fast & Low-Cost Transactions',
    description: 'Powered by Stellar\'s efficient network, enjoy fast and low-fee transactions for seamless global participation in projects.'
  },
  {
    logo: 'locked-svgrepo-com',
    title: 'Milestone-Based Fund Disbursement',
    description: 'No more wasted funds. Project creators receive funding incrementally as they achieve key project milestones.'
  },
  {
    logo: 'globe-with-meridians-svgrepo-com',
    title: 'Global Access, Local Impact',
    description: 'Anyone, anywhere can invest in public good projects, supporting causes like wildlife conservation or community development.'
  },
  {
    logo: 'light-bulb-svgrepo-com',
    title: 'Transparent Token Issuance',
    description: 'Each project issues unique tokens, representing investor stakes and governance rights for an open and fair fundraising process.'
  },
  {
    logo: 'briefcase-svgrepo-com',
    title: 'Stellar Wallet Integration',
    description: 'Seamless connection with Stellar wallets (Freighter) ensures easy transactions and wallet management for both investors and creators.'
  }
];

const FeatureCard: React.FC<Feature> = ({ variants, logo, title, description }) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <motion.div variants={variants} className='relative w-64 p-6 my-4 bg-gray-200 shadow-xl rounded-3xl'>
    <div className='absolute flex items-center p-3 rounded-full shadow-xl bg-gradient-to-r from-[#FF8C00] to-[#FF4500] left-4 -top-8'>
      <Image src={`/home/${logo}.svg`} height={50} width={50} quality={100} alt='img' className='p-1' />
    </div>
    <div className='mt-8 text-gray-800'>
      <p className='my-2 text-xl font-semibold'>{title}</p>
      <div className='flex space-x-2 font-medium text-basic'>
        <p>{description}</p>
      </div>
    </div>
  </motion.div>
);

export default function Page() {
  return (
    <div>
      <div className='md:h-[30rem] w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden'>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
        <div className=' p-4 max-w-7xl  mx-auto relative z-10  w-full pt-8 md:pt-0'>
          <motion.h1
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
            className='text-4xl md:text-6xl font-bold text-center bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50'>
            Empower Innovation with <br /> <span className='italic'>Community-Driven Fundraising</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
            className='mt-4 font-normal text-lg dark:text-neutral-300 max-w-4xl text-center mx-auto'>
            A decentralized platform where creators can launch projects, and investors can fuel innovation. Vote on milestones and release funds only when goals are met. Built on Stellar&apos;s fast and secure network.
          </motion.p>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            className='flex flex-row space-x-2 py-2 items-center justify-center'>
            <Button className='px-10' asChild>
              <Link href='/explore-projects'>
                Explore Projects
              </Link>
            </Button>
            <Button variant='outline' className='px-10 dark:border-white' asChild>
              <Link href='/create-projects'>
                Create Projects
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <MaxWidthWrapper>
        {/* <div className='flex flex-col items-center space-y-2 pt-2 pb-8'>
          <motion.h1
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
            className='text-3xl md:text-4xl text-center font-semibold text-black dark:text-white'>
            Fuel Ideas, Vote Progress,<br />
            <span className='text-4xl md:text-[5rem] font-bold mt-1 leading-none'>
              Fund Securely
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
          >
            <Image src='/hero.jpg' height={400} width={400} quality={100} alt='img' className='mx-auto rounded-2xl object-cover w-full md:w-3/4 h-56 md:h-[36rem]' />
          </motion.div>
        </div> */}

        <div>
          <div className='my-12 text-center'>
            <motion.h1
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
              className='text-4xl font-bold leading-10 sm:text-5xl sm:leading-none md:text-6xl'>Features</motion.h1>
          </div>

          <div className='flex items-center justify-center pb-8 w-full'>
            <motion.div initial='hidden' whileInView='visible' variants={containerVariants} className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} variants={cardVariants} />
              ))}
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
