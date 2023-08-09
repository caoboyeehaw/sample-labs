import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Modal from 'react-modal';
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-newyork";
import { UserAuthForm } from "@/components/ui/user-auth-form";
import React, { useState } from 'react'; // Import useState

export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
};

interface AuthenticationModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const AuthenticationModal = ({ isOpen, onRequestClose }: AuthenticationModalProps) => {
    const [modalStyles, setModalStyles] = useState({
        opacity: '0',
        transform: 'translate(-50%, -50%) scale(0.5)',
        top: '50%', // Add these lines
        left: '50%',
        right: '50%',
        bottom: '50%'
    });

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            className="relative border border-gray-700 p-0 transform transition-all duration-200 ease-in-out rounded-md"
            overlayClassName="bg-opacity-30 backdrop-blur-md transition-opacity duration-400 ease-in-out"
            onAfterOpen={() => {
                setModalStyles({
                    opacity: '1',
                    transform: 'translate(-50%, -50%) scale(1)',
                    top: '50%', // Add these lines
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto'
                });
            }}
            onAfterClose={() => {
                setModalStyles({
                    opacity: '0',
                    transform: 'translate(-50%, -50%) scale(0.5)',
                    top: '50%', // Add these lines
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto'
                });
            }}
            style={{
                content: modalStyles // Apply the styles from state
            }}
        >
            <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background">
                <Link href="/examples/authentication" className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 md:right-8 md:top-8")}>
                    Login
                </Link>
                <div className="relative hidden h-full flex-col bg-dark p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900"/>
                    <div className="relative z-20 flex items-center text-lg font-medium">
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Image src="/sample-labs-logo.png" alt="Logo" width={70} height={70} className="mr-2 h-8 w-8" />
                        WAVLABS LLC
                    </div>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This tool helped me overcome my obsession over pitchmap.&rdquo;
                            </p>
                            <footer className="text-sm">caoboy!</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserAuthForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                    
                </div>
                
            </div>
            
        </Modal>
    );
};

export default AuthenticationModal;