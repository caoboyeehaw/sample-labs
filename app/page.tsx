'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Image from 'next/image'

import { Button } from '@/components/ui/button-newyork'
import { GithubIconLink } from '@/components/ui/github-icon'
import { CoffeeIconLink } from '@/components/ui/coffee-icon'
import { ModeToggle } from '@/components/ui/mode-toggle'
import AuthenticationModal from "@/components/ui/authenticationmodal"

const Home: React.FC = () => {
  
  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
      setModalOpen(true);
  }

  function closeModal() {
      setModalOpen(false);
  }
  
  return (
    <div className="relative flex justify-between items-center w-full">
      
      <div className="relative flex justify-between items-center px-6 py-2 w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto backdrop-blur ">

        <div className="flex items-center space-x-4 z-20 mt-3">

          <Link href="/about" passHref>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Image src="/sample-labs-logo.png" alt="Logo" width={35} height={35} />
              <span className="text-xl font-medium">WAVLABS</span>
              <span className="text-xs mb-1 font-medium bg-primary rounded text-primary-foreground px-1">ALPHA</span>
            </div>
          </Link>

          <p className="flex items-center space-x-1">
            <Button className="text-md font-normal" variant="ghost" size="sm">Community</Button>
          </p>

        </div >
        <div className="flex space-x-3 z-20 mt-3">
          <p className="flex space-x-3">
            <Button variant="transparentoutline" size="sm" onClick={openModal}>Sign In</Button>
            <Button variant="primary" size="sm" onClick={openModal}>Create account</Button>
          </p>

          <p className="flex">
          <GithubIconLink></GithubIconLink>
          <CoffeeIconLink></CoffeeIconLink>
          <ModeToggle></ModeToggle>
          </p>
        </div>
        <AuthenticationModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>

    </div>
    

    
  )
}

export default Home;
