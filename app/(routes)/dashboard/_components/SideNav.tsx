import React, { useState } from 'react'
import Image from 'next/image'
import { Archive, ChevronDown, Flag, Github } from 'lucide-react'
import SideNavTopSection from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import SideNavBottomSection from './SideNavBottomSection'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { create } from 'domain'
import { TEAM } from './SideNavTopSection'
import { toast } from 'sonner'


function SideNav() {

    const { user }: any = useKindeBrowserClient();
    const createFile = useMutation(api.files.createFile)

    const [activeTeam, setActiveTeam] = useState<TEAM | any>()

    const onFileCreate = (fileName: string) => {
        console.log(fileName);
        createFile({
            fileName: fileName,
            teamId: activeTeam?._id,
            createdBy: user?.email,
            archive: false,
            document: '',
            whiteboard: ''
        }).then(resp => {
            if (resp) {
                toast('File created successfully!')
            }
        }, (e) => {
            toast('Error while creating file')
        })

    }


    return (
        <div className='h-screen fixed w-72 border-r p-6 border-[1px]
        flex flex-col'>
            <div className='flex-1'>
                <SideNavTopSection user={user} setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)} />
            </div>

            <div>
                <SideNavBottomSection
                    onFileCreate={onFileCreate}
                />
            </div>
        </div>
    )
}

export default SideNav
