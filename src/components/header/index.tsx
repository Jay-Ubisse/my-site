import profile from "../../assets/img/Logo-small.png";

export const HeaderArea = () => {
    return (
        <div className="bg-[#023047] w-full h-fit text-slate-300">
            <div className="w-1/6">
                <img src={profile} alt="profile" />
            </div>
            <h3 className="absolute right-7 top-8 text-white hover:text-[#FFBA08] font-semibold">Blog</h3>
        </div>
    );
}