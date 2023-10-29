"use client";

import { editor } from 'monaco-editor';
import Editor from '@monaco-editor/react';

const EditorComponent: React.FC = () => {
    const options: editor.IEditorOptions = {
        selectOnLineNumbers: true,
        minimap: { enabled: false },
    };

    return (
        <Editor
            // height="100%"
            theme="vs-dark"
            language="javascript"
            value={'function add(a) {\n  return a + a;\n}'}
            options={options}
        />

    );
};


export default EditorComponent;
