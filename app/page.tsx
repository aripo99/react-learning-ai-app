// Home.js

import Browser from "@/components/Browser";
import Content from "@/components/Content";
import Editor from "@/components/Editor";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <div className="flex flex-col w-1/2 space-y-8">
        <Content />
        <Editor />
      </div>
      <div className="w-1/2">
        <Browser />
      </div>
    </main>
  );
}

