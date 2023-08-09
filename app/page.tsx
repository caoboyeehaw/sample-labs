'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Image from 'next/image'

import { Button } from '@/components/ui/button-newyork'
import { ButtonWavLabs } from '@/components/ui/button-wavlabs'
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
    <div className="relative flex justify-between items-center w-full mt-2">
      
      <div className="2xl:container relative flex justify-between items-center mx-auto backdrop-blur">

        <div className="flex items-center space-x-4 z-20">

          <Link href="/about" passHref>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Image src="/wavlabs-logo.png" alt="Logo" width={30} height={30} />
              <span className="text-xl font-medium">WAVLABS</span>
              <span className="text-xs mb-1 font-medium bg-primary rounded text-primary-foreground px-1">ALPHA</span>
            </div>
          </Link>

          <p className="flex items-center space-x-1 ">
            <ButtonWavLabs className="text-md font-normal" variant="ghost" size="sm">Explore</ButtonWavLabs>
          </p>

          <p className="flex items-center space-x-1">
            <ButtonWavLabs className="text-md font-normal" variant="ghost" size="sm">Popular</ButtonWavLabs>
          </p>

          <p className="flex items-center space-x-1">
            <ButtonWavLabs className="text-md font-normal" variant="ghost" size="sm">Threads</ButtonWavLabs>
          </p>

          <p className="flex items-center space-x-1">
            <ButtonWavLabs className="text-md font-normal" variant="ghost" size="sm">Ranking</ButtonWavLabs>
          </p>

        </div >

        <div className="flex space-x-3 z-20 mt-1">
          <p className="flex space-x-3">
            <ButtonWavLabs className="text-sm font-bold" variant="ghost2" size="sm" onClick={openModal}>Log In</ButtonWavLabs>
            <ButtonWavLabs className="text-sm font-bold" variant="primary" size="sm" onClick={openModal}>Create account</ButtonWavLabs>
          </p>

          <p className="flex">
          <GithubIconLink></GithubIconLink>
          <CoffeeIconLink></CoffeeIconLink>
          <ModeToggle></ModeToggle>
          </p>
        </div>
        <AuthenticationModal isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
      <div className="border-t border-gray-300 h-px"/>
    </div>
    

    
  )
}

export default Home;
