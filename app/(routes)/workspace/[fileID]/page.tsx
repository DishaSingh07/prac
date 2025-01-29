"use client"

import React, { useEffect, useState, use } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../dashboard/_components/FileList'
import { Id } from "@/convex/_generated/dataModel"; // Import Id type


function Workspace({ params }: { params: Promise<{ fileID: string }> }) {

    const [triggerSave, setTriggerSave] = useState(false);
    const convex = useConvex();
    const [fileData, setFileData] = useState<FILE | any>();

    const { fileID } = use(params);



    useEffect(() => {
        console.log("FILEID", fileID)
        fileID && getFileData();
    }, [fileID])

    const getFileData = async () => {
        const result = await convex.query(api.files.getFileById, { _id: fileID as Id<"files"> });


        console.log(result)
        setFileData(result);
    }

    return (
        <div>
            <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

            {/* workspace layout */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* document */}
                <div className='h-screen'>
                    <Editor onSaveTrigger={triggerSave} fileID={fileID}
                        fileData={fileData} />
                </div>

                {/* whiteboard/canvas */}
                <div className='bg-red-400 h-screen'>
                    Canvas
                </div>
            </div>
        </div>
    )
}

export default Workspace

