import ProgressBar from "@ramonak/react-progress-bar";

export const SkillsArea = () => {
    return (
        <div id="skills" className="bg-white w-11/12 min-h-fit flex">
            <div className="bg-transparent w-1/3 m-4 flex flex-col gap-3">
                <h1 className="text-center text-lg font-bold mb-2">Linguangens de Programação</h1>
                <div>
                    <h3>HTML</h3>
                    <ProgressBar completed={90} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>CSS</h3>
                    <ProgressBar completed={80} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>JavaScript</h3>
                    <ProgressBar completed={70} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>TypeScript</h3>
                    <ProgressBar completed={70} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>ReactJS</h3>
                    <ProgressBar completed={70} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>PHP</h3>
                    <ProgressBar completed={60} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>Java</h3>
                    <ProgressBar completed={80} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>C#</h3>
                    <ProgressBar completed={80} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>Assembly</h3>
                    <ProgressBar completed={50} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
            </div>
            <div className="bg-transparent w-1/3 m-4 flex flex-col gap-3">
                <h1 className="text-center text-lg font-bold mb-2">Base de Dados</h1>
                <div>
                    <h3>MySQL</h3>
                    <ProgressBar completed={80} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>PostgreeSQL</h3>
                    <ProgressBar completed={70} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
            </div>
            <div className="bg-transparent w-1/3 m-4 flex flex-col gap-3">
                <h1 className="text-center text-lg font-bold mb-2">Outras Tecnologias</h1>
                <div>
                    <h3>TailwindCSS</h3>
                    <ProgressBar completed={80} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>Figma</h3>
                    <ProgressBar completed={70} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>Arduino</h3>
                    <ProgressBar completed={50} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>IoT</h3>
                    <ProgressBar completed={10} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
                <div>
                    <h3>Redes de Computadores</h3>
                    <ProgressBar completed={10} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
                </div>
            </div>
        </div>
    );
}