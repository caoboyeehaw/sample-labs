import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { UserAuthForm } from "@/components/ui/user-auth-form"

export default function Home() {
    return (
        
      <div className="flex justify-between items-center px-4 py-4 w-full md:w-full lg:w-3/4 xl:w-2/3 mx-auto">
        <Image src="/public/sample-labs-logo.png" alt="Logo" width="50" height="50" className="" />
        <h1 className="text-xl ">Sample Labs</h1>
        <div className="flex space-x-4">
          <Button variant="secondary">Log in</Button>
          <Button variant="primary">Sign Up</Button>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    )
  }
  
  