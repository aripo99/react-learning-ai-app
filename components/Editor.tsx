"use client";

import MonacoEditor from 'react-monaco-editor';
import { editor } from 'monaco-editor';

const EditorComponent = () => {
    const options: editor.IEditorOptions = {
        selectOnLineNumbers: true
    };
    return (
        <div className="h-1/2">
            <MonacoEditor
                language="javascript"
                options={options}
                theme="vs-dark"
                width="100%"
                height="100%"
            />
        </div>
    );
}

export default EditorComponent;
