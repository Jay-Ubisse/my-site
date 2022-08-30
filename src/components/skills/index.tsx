import { Languages } from "./skills-components/Languages";
import { OtherTech } from "./skills-components/Databases";
import { Experience } from "./skills-components/Experience";

export const SkillsArea = () => {
    return (
        <div id="skills" className="bg-[url('foto.png')] w-11/12 min-h-fit p-6">
            <h1 className="text-center text-3xl font-bold mb-2">Habilidades e Experiencia</h1>
            <div className="bg-transparent flex">
                <Experience />
                <Languages />
                <OtherTech />
            </div>
        </div>
    );
}