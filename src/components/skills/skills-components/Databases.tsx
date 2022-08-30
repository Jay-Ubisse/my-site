import ProgressBar from "@ramonak/react-progress-bar";

export const OtherTech = () => {
    return (
        <div className="bg-transparent w-1/4 m-4 flex flex-col gap-3">
            <h1 className="text-center text-lg font-bold mb-2">Base de Dados</h1>
            <div>
                <h3>MySQL</h3>
                <ProgressBar completed={80} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
            </div>
            <div>
                <h3>PostgreeSQL</h3>
                <ProgressBar completed={70} customLabel=" " bgColor="#264653" baseBgColor="#ced4da" />
            </div>

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
    );
}