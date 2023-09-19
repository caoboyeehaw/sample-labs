import React, { useState } from 'react';
import Navbar from '@/app/navbar';

import Link from 'next/link';
import Image from 'next/image'

import { Button } from '@/components/ui/button-newyork'
import { ButtonWavLabs } from '@/components/ui/button-wavlabs'
import { GithubIconLink } from '@/components/ui/github-icon'
import { CoffeeIconLink } from '@/components/ui/coffee-icon'
import { ModeToggle } from '@/components/ui/mode-toggle'

import AuthenticationModal from "@/components/ui/authenticationmodal"

export default function Sidebar() {
    return (
      <div className="pl-4 space-y-2">

        <p className="flex items-center space-x-1 ">
          <ButtonWavLabs className="text-xl font-semibold" variant="ghost" size="sm">Explore</ButtonWavLabs>
        </p>
  
        <p className="flex items-center space-x-1">
          <ButtonWavLabs className="text-xl font-semibold" variant="ghost" size="sm">Popular</ButtonWavLabs>
        </p>
  
        <p className="flex items-center space-x-1">
          <ButtonWavLabs className="text-xl font-semibold" variant="ghost" size="sm">Ranking</ButtonWavLabs>
        </p>
  
        <p className="flex items-center space-x-1">
          <ButtonWavLabs className="text-xl font-semibold" variant="ghost" size="sm">Threads</ButtonWavLabs>
        </p>

        <p className="flex">
          <GithubIconLink />
          <CoffeeIconLink />
          <ModeToggle />
        </p>

        <p className="text-xs font-normal">
          About Newsroom Contact Careers
          TikTok for Good Advertise Developers Transparency TikTok Rewards TikTok Embeds
          Help Safety Terms Privacy Creator Portal Community Guidelines
          @ Wavlabs 2023
        </p>
      </div>
    );
  }
  