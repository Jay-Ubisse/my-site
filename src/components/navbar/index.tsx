import { Activity, AddressBook, Code, House, PencilLine } from "phosphor-react"
import { HashLink } from "react-router-hash-link"

export const NavigationBar = () => {
    return (
        <div className="fixed left-4 top-32 py-11 pl-4 gap-9 shadow-lg drop-shadow-lg shadow-slate-700 bg-[#023047] w-20 h-94 rounded-full flex flex-col items-start text-xl text-slate-200">
            <HashLink to="../components/#about" smooth className="bg-transparent rounded-full px-3 h-12 text-white hover:text-[#FFBA08] hover:bg-[#023047] flex items-center group">
                <House className="h-7 w-7" />
                <span className="max-w-0 pl-1 overflow-hidden group-hover:max-w-xs transition-all duration-100 ease-linear">Home</span>
            </HashLink>
            <HashLink to="../components/#skills" smooth className="bg-transparent rounded-full px-3 h-12 text-white hover:text-[#FFBA08] hover:bg-[#023047] flex items-center group">
                <Activity className="h-7 w-7 hover:text-[#FFBA08]" />
                <span className="max-w-0 pl-1 overflow-hidden group-hover:max-w-xs transition-all duration-100 ease-linear">Skills</span>
            </HashLink>
            <HashLink to="../components/#projects" smooth className="bg-transparent rounded-full px-3 h-12 text-white hover:text-[#FFBA08] hover:bg-[#023047] flex items-center group">
                <Code className="h-7 w-7" />
                <span className="max-w-0 pl-1 overflow-hidden group-hover:max-w-xs transition-all duration-100 ease-linear">Projects</span>
            </HashLink>
            <HashLink to="../components/#articles" smooth className="bg-transparent rounded-full px-3 h-12 text-white hover:text-[#FFBA08] hover:bg-[#023047] flex items-center group">
                <PencilLine className="h-7 w-7" />
                <span className="max-w-0 pl-1 overflow-hidden group-hover:max-w-xs transition-all duration-100 ease-linear">Posts</span>
            </HashLink>
            <HashLink to="../components/#contact" smooth className="bg-transparent rounded-full px-3 h-12 text-white hover:text-[#FFBA08] hover:bg-[#023047] flex items-center group">
                <AddressBook className="h-7 w-7" />
                <span className="max-w-0 pl-1 overflow-hidden group-hover:max-w-xs transition-all duration-100 ease-linear">Contact</span>
            </HashLink>
        </div>
    );
}