"use client";

import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import React, { useEffect } from 'react';
import Editor from '@monaco-editor/react';

// @ts-expect-error
import { initVimMode } from 'monaco-vim';

export function TestEditor() {
  const editorRef = React.useRef < monaco.editor.IStandaloneCodeEditor | null > (null);
  const statusBarRef = React.useRef(null);

  const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;

    const vimMode = initVimMode(editorRef.current);
    console.log('vimMode', vimMode);
  }


  return <>
    <Editor height="90vh" defaultLanguage="javascript" onMount={onMount} defaultValue="// some comment" />
    <div ref={statusBarRef} style={{ height: '10vh', color: "#fff" }}></div>
  </>
}
