"use client"

import React, { useState } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import Editor from '../_components/Editor'

function Workspace() {

    const [triggerSave, setTriggerSave] = useState(false);

    return (
        <div>
            <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

            {/* workspace layout */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* document */}
                <div className='h-screen'>
                    <Editor onSaveTrigger = {triggerSave} />
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

