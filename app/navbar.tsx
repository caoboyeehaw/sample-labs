'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button-newyork';
import { ButtonWavLabs } from '@/components/ui/button-wavlabs';
import { GithubIconLink } from '@/components/ui/github-icon';
import { CoffeeIconLink } from '@/components/ui/coffee-icon';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Icons } from "@/components/icons"

import { ProfileOptions } from '@/components/ui/profile-options'

import AuthenticationModal from "@/components/ui/authenticationmodal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };


  return (
    <div className="relative w-full mt-2">
      <div className="border-b border-accent">
        <div className="2xl:container relative flex justify-between items-center mx-auto backdrop-blur mb-2">
            <div className="flex items-center space-x-4">
                <Link href="/about" passHref>
                    <div className="flex items-center space-x-1 cursor-pointer pl-4">
                        <Image src="/wavlabs-logo.png" alt="Logo" width={25} height={25} />
                        <span className="text-2xl font-semibold">WavLabs</span>
                        <span className="text-xl font-normal text-zinc-400">| cloud</span>
                        <Icons.vert/>
                    </div>
                </Link>
            </div>

            <div className="flex items-center border rounded-full">
            <input 
                type="text" 
                placeholder="Search..." 
                className="p-2 rounded-l-full w-60"  // w-60 sets the width to 15rem
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />

              <button className="p-2 rounded-r-full">
                <Icons.search/>
              </button>
            </div>


            <div className="flex space-x-3 z-20 mt-1 pr-4">
                <p className="flex space-x-3">
                    <ButtonWavLabs className="text-sm font-bold" variant="ghost2" size="sm" onClick={openModal}>+ Upload</ButtonWavLabs>
                    <ButtonWavLabs className="text-sm font-bold" variant="primary" size="sm" onClick={openModal}>Log in </ButtonWavLabs>
                    <ProfileOptions></ProfileOptions>
                    
                    {/*
                    <Button asChild variant="ghost" size="icon">
                      <Icons.person className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Open Profile Options</span>
                        
                    </Button>
                    */}

                </p>

            </div>
        </div>
      </div>
      {isOpen && <AuthenticationModal isOpen={isOpen} onRequestClose={closeModal} />}
    </div>
    );
}