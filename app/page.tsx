
'use client';

import React, { useState } from 'react';
import Image from 'next/image'
import { Button } from '@/components/ui/button'
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
      <div className="flex justify-between items-center px-4 py-4 w-full md:w-full lg:w-3/4 xl:w-2/3 mx-auto">
        <div className="flex items-center space-x-2">
          <Image src="/sample-labs-logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-semibold">Sample Labs</h1>
        </div>
        <div className="flex space-x-4">
        <ModeToggle></ModeToggle>
          <Button variant="secondary" size="sm">Log in</Button>
          <Button variant="primary" size="sm" onClick={openModal}>Sign Up</Button>
        </div>

        <AuthenticationModal isOpen={isModalOpen} onRequestClose={closeModal} />

      </div>
    )
}

export default Home;

