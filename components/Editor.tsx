"use client";

import { editor } from 'monaco-editor';
import Editor from '@monaco-editor/react';

const EditorComponent: React.FC = () => {
    const options: editor.IEditorOptions = {
        selectOnLineNumbers: true,
        minimap: { enabled: false },
    };

    return (
        <div className="h-1/2">
            <Editor
                height="50vh" // By default, it fully fits with its parent
                theme="vs-dark"
                language="javascript"
                value={'function add(a) {\n  return a + a;\n}'}
                options={options}
            />
        </div>
    );
};


export default EditorComponent;
