"use client"

import React, { useState, useEffect, useRef } from 'react'
import { isConnected, getAddress } from '@stellar/freighter-api'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ModeToggle from './ModeToggle'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [activeLink, setActiveLink] = useState<string>('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [linkPosition, setLinkPosition] = useState<number>(0);
    const linkRefs = useRef<{ [key: string]: HTMLSpanElement | null }>({});
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        const checkConnection = async () => {
            const connectionStatus = await isConnected();
            if (connectionStatus.isConnected) {
                fetchAddress();
            }
        };

        checkConnection();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    useEffect(() => {
        if (linkRefs.current[pathname]) {
            setLinkPosition(linkRefs.current[pathname]?.offsetLeft || 0);
            setActiveLink(pathname);
        }
    }, [pathname]);

    useEffect(() => {
        if (linkRefs.current[activeLink]) {
            setLinkPosition(linkRefs.current[activeLink]?.offsetLeft || 0);
        }
    }, [activeLink]);

    const fetchAddress = async () => {
        const addressResponse = await getAddress();
        if (addressResponse.error) {
            // setErrorMessage(addressResponse.error);
        } else {
            setWalletAddress(addressResponse.address);
            localStorage.setItem('walletAddress', addressResponse.address);
        }
    };

    const handleConnect = async () => {
        const connectionStatus = await isConnected();
        if (!connectionStatus.isConnected) {
            alert('Please install Freighter wallet!');
        } else {
            fetchAddress();
        }
    };

    const handleDisconnect = () => {
        setWalletAddress(null);
        localStorage.removeItem('walletAddress');
        alert('Disconnected from wallet');
    };

    useEffect(() => {
        const storedAddress = localStorage.getItem('walletAddress');
        if (storedAddress) {
            setWalletAddress(storedAddress);
        }
    }, []);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div className={`backdrop-blur-3xl fixed top-0 z-50 w-full transition-all duration-200 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <nav className='relative flex items-center py-2 flex-wrap px-2.5 md:px-12 tracking-wider justify-between'>
                <Link href='/' passHref>
                    <div className='text-4xl'>StellStarter</div>
                </Link>

                <div className='hidden w-full md:inline-flex md:flex-grow md:w-auto'>
                    <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto md:pl-16 lg:pl-28 w-full md:items-center items-start flex flex-col md:h-auto space-x-2'>
                        <Link href='/' passHref>
                            <span
                                ref={(el) => {
                                    linkRefs.current['/'] = el;
                                }}
                                onClick={() => handleLinkClick('/')}
                                className={`md:inline-flex md:w-auto w-full px-3 py-2 hover:rounded items-center justify-center hover:text-white hover:bg-primary cursor-pointer`}
                            >
                                About
                            </span>
                        </Link>

                        <Link href='/explore-projects' passHref>
                            <span
                                ref={(el) => {
                                    linkRefs.current['/explore-projects'] = el;
                                }}
                                onClick={() => handleLinkClick('/explore-projects')}
                                className={`md:inline-flex md:w-auto w-full px-3 py-2 hover:rounded items-center justify-center hover:text-white hover:bg-primary cursor-pointer`}
                            >
                                Explore Projects
                            </span>
                        </Link>

                        <Link href='/create-projects' passHref>
                            <span
                                ref={(el) => {
                                    linkRefs.current['/create-projects'] = el;
                                }}
                                onClick={() => handleLinkClick('/create-projects')}
                                className={`md:inline-flex md:w-auto w-full px-3 py-2 hover:rounded items-center justify-center hover:text-white hover:bg-primary cursor-pointer`}
                            >
                                Create Projects
                            </span>
                        </Link>

                        <Link href='/my-investments' passHref>
                            <span
                                ref={(el) => {
                                    linkRefs.current['/my-investments'] = el;
                                }}
                                onClick={() => handleLinkClick('/my-investments')}
                                className={`md:inline-flex md:w-auto w-full px-3 py-2 hover:rounded items-center justify-center hover:text-white hover:bg-primary cursor-pointer`}
                            >
                                My Investments
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='hidden w-full md:inline-flex md:flex-grow md:w-auto'>
                    <div className='md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto space-x-2'>
                        {
                            walletAddress ? (
                                <Button variant='destructive' onClick={handleDisconnect}>Disconnect Wallet</Button>
                            ) : (
                                <Button onClick={handleConnect}>Connect Wallet</Button>
                            )
                        }
                    </div>
                </div>

                <div className='flex space-x-2 justify-between items-center ml-2'>
                    <ModeToggle />
                </div>

                <div
                    className='absolute bottom-1.5 left-0 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 rounded'
                    style={{ width: linkRefs.current[activeLink]?.offsetWidth || 0, transform: `translateX(${linkRefs.current[activeLink]?.offsetLeft || 0}px)` }}
                />
            </nav>
        </div>
    );
}