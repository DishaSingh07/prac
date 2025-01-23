import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import SideNavTopSection from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'


function SideNav() {

    const { user }: any = useKindeBrowserClient();

    return (
        <div className='h-screen fixed w-72 border-r p-6 border-[1px]'>
            <SideNavTopSection user={user} />
        </div>
    )
}

export default SideNav
