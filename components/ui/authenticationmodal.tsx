import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Modal from 'react-modal';


import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-newyork";
import { UserAuthForm } from "@/components/ui/user-auth-form";
import styled, { createGlobalStyle } from 'styled-components';



export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
};

interface AuthenticationModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const AuthenticationModal = ({ isOpen, onRequestClose }: AuthenticationModalProps) => {
    const customStyles = {
        content: {
            //border: '2px solid #27272a',
            border: 'none',
            padding: '0px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%) scale(.8)',
            opacity: 0,
            transition: 'opacity 0.2s ease-in-out, transform 0.1s ease-in-out',  // added transform here
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', 
            borderRadius: '10px',
            background: 'rgba(50, 50, 50, 0.30)', 
        },
        overlay: {
            background: 'rgba(50, 50, 50, 0.30)',
            backdropFilter: 'blur(4px)',
            transition: 'opacity 0.4s ease-in-out',
        },
    };
    

    
    const GlobalStyle = createGlobalStyle`
    @keyframes fade-in {
        from { 
            opacity: 0; 
            transform: scale(.6);  // initially scale to .6
        }
        to { 
            opacity: 1; 
            transform: scale(1);  // grow to full size
        }
    }
    @keyframes fade-out {
        from { 
            opacity: 1; 
            transform: scale(1);  // initially scale to 1
        }
        to { 
            opacity: 0; 
            transform: scale(.6);  // grow to full size
        }
    }
`;

        
    
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            style={customStyles}
            onAfterOpen={() => {
                customStyles.content.opacity = 1;
                customStyles.content.transform = 'translate(-50%, -50%) scale(1)';  // added this line
            }}
            onAfterClose={() => {
                customStyles.content.opacity = 0;
                customStyles.content.transform = 'translate(-50%, -50%) scale(.8)';  // added this line
            }}
        >
            <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background">
                <Link href="/examples/authentication" className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 md:right-8 md:top-8")}>
                    Login
                </Link>
                <div className="relative hidden h-full flex-col bg-dark p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 flex items-center text-lg font-medium">
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Image src="/sample-labs-logo.png" alt="Logo" width={70} height={70} className="mr-2 h-8 w-8" />
                        Sample Labs
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
