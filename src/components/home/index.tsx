import { About } from "./home_components/about";
import { PictureForm } from "./home_components/picture";

export const AboutArea = () => {
    return (
        <div id="about" className="bg-[#264653] flex flex-col min-h-screen w-11/12 items-center py-3 mt-3 rounded-l-lg">
            <PictureForm />
            <About />
        </div>
    );
}