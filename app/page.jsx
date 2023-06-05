"use client";
import Header from '../components/dev/Header'
import Footer from '../components/dev/Footer'
import Card from '../components/dev/Card'
import Upload from '../components/dev/Upload'
import Editor from '../components/dev/Editor'
import { useStore } from "../lib/useStore.js";

export default function Home() {

    const imageURI = useStore(state => state.imageURI)

    return (
        <main
            className="container mx-auto flex min-h-screen flex-col items-center justify-between px-12"
        >
            <Header />
            <div className="w-full flex flex-col lg:flex-row mt-16 lg:mt-0 items-top gap-16 lg:gap-8">
                {
                    imageURI ?
                    <Card />
                    :
                    <Upload />
                }
                <Editor />
            </div>
            <Footer />
        </main>
    );
}
