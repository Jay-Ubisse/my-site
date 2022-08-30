import { About } from "./home_components/about";
import profile from "../../assets/img/Logo-small.png";

export const AboutArea = () => {
    return (
        <div id="about" className="bg-[#023047] flex flex-col h-fit w-11/12 items-center pb-12 mt-3 rounded-l-lg">
            <div className="w-1/3">
                <img src={profile} alt="profile" />
            </div>
            <About />
        </div>
    );
}