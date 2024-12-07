import Footer from "../blocks/Footer";
import Navbar from "../blocks/Navbar";
import SearchBar from "../components/Form";
import ShoesList from "../components/ShoesList";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="bg-[#e2e8f0] dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-100 flex flex-col justify-center items-center py-20 w-full h-auto gap-4">
                <div className="flex flex-row w-full justify-center items-center gap-4">
                    {/* <Planet /> */}
                    <SearchBar />
                </div>
                <ShoesList />
            </div>
            <Footer />
        </>
    )
}