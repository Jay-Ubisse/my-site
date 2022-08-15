import { About } from "./home_components/about";
import { Name } from "./home_components/name";
import { PictureForm } from "./home_components/picture";

export const AboutArea = () => {
    return (
        <div id="about" className="bg-white flex flex-col min-h-screen w-11/12 items-center py-3 mt-3 rounded-l-lg">
            <PictureForm />
            <Name />
            <About />
        </div>
    );
}