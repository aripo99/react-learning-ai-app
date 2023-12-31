import Browser from "@/components/Browser";
import Content from "@/components/Content";
import Editor from "@/components/Editor";

export default function Home() {
    return (
        <main className="flex min-h-screen">
            <div className="flex flex-col w-1/2 h-screen">
                <div className="flex h-1/2 overflow-y-auto pb-4 m-4">
                    <Content />
                </div>
                <div className="flex h-1/2 overflow-y-auto pt-4 m-4">
                    <Editor />
                </div>
            </div>
            <div className="w-1/2">
                <Browser />
            </div>
        </main>
    );
}