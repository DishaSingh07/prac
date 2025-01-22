"use client"

import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useConvex } from 'convex/react';
import React, { useEffect } from 'react'
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { query } from '@/convex/_generated/server';


function DashboardLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {

    const convex = useConvex();
    const { user }: any = useKindeBrowserClient();
    const router = useRouter();

    useEffect(() => {
        user && checkTeam();
    }, [user])

    const checkTeam = async () => {
        const result = await convex.query(api.teams.getTeam,
            { email: user?.email });

        if (!result?.length) {
            router.push('teams/create')
        }
    }



    return (
        <div>
            {children}
        </div>
    )
}

export default DashboardLayout
