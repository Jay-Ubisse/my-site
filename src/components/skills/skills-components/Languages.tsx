import ProgressBar from "@ramonak/react-progress-bar";

export const Languages = () => {
    return (
        <div className="bg-transparent w-1/4 m-4 flex flex-col gap-3">
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
    );
}