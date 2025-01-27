"use client"

import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
// @ts-ignore
import Checklist from '@editorjs/checklist'
import Paragraph from '@editorjs/paragraph';
import Warning from '@editorjs/warning';

function Editor() {

    const ref = useRef<EditorJS | null>(null);

    useEffect(() => {
        initEditor();
    }, [])

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

            holder: 'editorjs'
        });
        ref.current = editor;
    }
    return (
        <div>
            <div id='editorjs' className='ml-20'>

            </div>
        </div>
    )
}

export default Editor
