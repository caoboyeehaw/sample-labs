import React, { useState } from 'react';
import Navbar from '@/app/navbar';

import Link from 'next/link';
import Image from 'next/image'

import { Button } from '@/components/ui/button-newyork'
import { ButtonWavLabs } from '@/components/ui/button-wavlabs'
import { ButtonSidebar } from '@/components/ui/button-sidebar'
import { GithubIconLink } from '@/components/ui/github-icon'
import { CoffeeIconLink } from '@/components/ui/coffee-icon'
import { ModeToggle } from '@/components/ui/mode-toggle'

import AuthenticationModal from "@/components/ui/authenticationmodal"

export default function Sidebar() {
    return (
      <div className="pl-4 space-y-2">

        <p className="flex items-center space-x-1 ">
          <Link href="/explore"><ButtonWavLabs className="text-xl font-semibold" variant="ghost" size="sm">Explore</ButtonWavLabs></Link>
        </p>
  
        <p className="flex items-center space-x-1">
          <Link href="/popular"><ButtonWavLabs className="text-xl font-semibold" variant="ghost" size="sm">Popular</ButtonWavLabs></Link>
        </p>
  
        <p className="flex items-center space-x-1">
          <Link href="/ranking"><ButtonWavLabs className="text-xl font-semibold" variant="ghost" size="sm">Ranking</ButtonWavLabs></Link>
        </p>
  
        <p className="flex items-center space-x-1">
          <Link href="/threads"><ButtonWavLabs className="text-xl font-semibold" variant="ghost" size="sm">Threads</ButtonWavLabs></Link>
        </p>

        <p className="flex">
          <GithubIconLink />
          <CoffeeIconLink />
          <ModeToggle />
        </p>

        <div className="">
          <Link href="/about"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">About </div></Link>
          <Link href="/newsroom"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Newsroom </div></Link>
          <Link href="/contact"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Contact </div></Link>
          <Link href="/advertise"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Advertise </div></Link>
          <Link href="/transparency"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Transparency </div></Link>
          <Link href="/help"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Help </div></Link>
          <Link href="/safety"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Safety </div></Link>
          <Link href="/terms"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Terms </div></Link>
          <Link href="/privacy"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Privacy </div></Link>
          <Link href="/creator"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Creator </div></Link>
          <Link href="/community"><div className="text-xs font-normal text-zinc-400 hover:text-zinc-300">Community </div></Link>

          {/* 
          About Newsroom Contact Careers
          Advertise Developers Transparency
          Help Safety Terms Privacy Creator 
          Community Guidelines
          @ Wavlabs 2023

          */}
          <span className="text-xs font-normal text-zinc-400 hover:text-zinc-300"> @ Wavlabs 2023</span>
  
        </div>
        {/*
        <p className="text-xs font-normal text-zinc-200">
          <Link href="/about"><p className="hover:underline">About</p></Link> 
          <Link href="/newsroom"><p className="hover:underline">Newsroom</p></Link> 
          <Link href="/contact"><p className="hover:underline">Contact</p></Link> 
          <Link href="/careers"><p className="hover:underline">Careers</p></Link>
          
          <span>@ Wavlabs 2023</span>
        </p>
      */}
      </div>
    );
  }
  