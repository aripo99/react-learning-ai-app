"use client";

import React from 'react';
import { transform } from '@babel/standalone';

const transpileCode = (code: string) => {
    return transform(code, {
        presets: ['react']
    }).code;
};


const Browser = () => {
    const code = `
        const App = () => {
            return (
            <div>
                <h1>Hello, world!</h1>
            </div>
            );
        }
        
        ReactDOM.render(<App />, document.getElementById('root'));
        `;
    const transpiledCode = transpileCode(code);
    const fullCode = `
      <div id="root"></div>
      <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <script>
        ${transpiledCode}
      </script>
    `;

    return (
        <iframe
            srcDoc={fullCode}
            title="browser-output"
            className="w-full h-full"
            sandbox="allow-scripts"
        ></iframe>
    );
};


export default Browser;
