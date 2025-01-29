"use client"

import React, { useEffect, useRef, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
// @ts-ignore
import Checklist from '@editorjs/checklist'
import Paragraph from '@editorjs/paragraph';
import Warning from '@editorjs/warning';

const rawDocument = {
    "time": 1550476186479,
    "blocks": [{
        data: {
            text: 'Document Name',
            level: 2
        },
        id: "123",
        type: 'header'

    },
    {
        data: {
            level: 4
        },
        id: "1234",
        type: 'header'

    }
    ],
    "version": "2.8.1"
}

function Editor({ onSaveTrigger }: any) {

    const ref = useRef<EditorJS | null>(null);
    const [document, setDocument] = useState(rawDocument);

    useEffect(() => {
        initEditor();
    }, [])

    useEffect(() => {
        console.log("trigger value : ", onSaveTrigger);
        onSaveTrigger && onSaveDocument();
    }, [onSaveTrigger])


    const initEditor = () => {
        const editor = new EditorJS({
            /**
             * Id of Element that should contain Editor instance
             */

            tools: {
                header: {
                    class: Header,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder: 'Enter the header'
                    }
                },

                list: {
                    class: EditorjsList,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },

                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },

                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                },
                warning: {
                    class: Warning,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+W',
                    config: {
                        titlePlaceholder: 'Title',
                        messagePlaceholder: 'Message',

                    }
                }

            },

            holder: 'editorjs',
            data: document
        });
        ref.current = editor;
    }

    const onSaveDocument = () => {
        if (ref.current) {
            ref.current.save().then((outputData) => {
                console.log('Article data: ', outputData)
            }).catch((error) => {
                console.log('Saving failed: ', error)
            });
        }
    }

    return (
        <div>
            <div id='editorjs' className='ml-20'>

            </div>
        </div>
    )
}

export default Editor
