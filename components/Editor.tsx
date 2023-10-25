"use client";
import dynamic from "next/dynamic";
import { editor } from 'monaco-editor';

const MonacoEditor = dynamic(
    () => import("react-monaco-editor"),
    { ssr: false }
);

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
