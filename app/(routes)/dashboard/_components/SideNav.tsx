import React from 'react'
import Image from 'next/image'
import { Archive, ChevronDown, Flag, Github } from 'lucide-react'
import SideNavTopSection from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import SideNavBottomSection from './SideNavBottomSection'


function SideNav() {

    const { user }: any = useKindeBrowserClient();
  

    return (
        <div className='h-screen fixed w-72 border-r p-6 border-[1px]
        flex flex-col'>
            <div className='flex-1'>
                <SideNavTopSection user={user} />
            </div>

            <div>
                <SideNavBottomSection />
            </div>
        </div>
    )
}

export default SideNav
