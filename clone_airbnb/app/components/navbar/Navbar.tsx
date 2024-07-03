import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchFilters from './SearchFilters';
import UserNav from './UserNav';
import { getUserId } from '@/app/lib/action';
import AddPropertyButton from './AddPropertyButton';

const Navbar = async () => {
  const userId = await getUserId();

  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
    <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex justify-between items-center">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="DjangoBnb logo"
                    width={150}
                    height={50}
                />
            </Link>

            <div className="flex space-x-6">
                <SearchFilters />
            </div>

            <div className="flex items-center space-x-6">
              <AddPropertyButton />
            </div>

            <div className="flex items-center space-x-6">
              <UserNav 
                userId={userId}
              />
            </div>

            
        </div>
    </div>
</nav>
  )
}

export default Navbar;
