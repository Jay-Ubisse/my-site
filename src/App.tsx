import { SkillsArea } from "./components/skills";
import { HeaderArea } from "./components/header";
import { AboutArea } from "./components/home";
import { ProjectstArea } from "./components/projects";
import { ArticlesArea } from "./components/articles";
import { ContactArea } from "./components/contact";
import { NavigationBar } from "./components/navbar";


export const App = () => {
  return (
    <>
      <HeaderArea />
      <main className="relative">
        <NavigationBar />
        <div className="flex flex-col items-end gap-2 mr-5">
          <AboutArea />
          <SkillsArea />
          <ProjectstArea />
          <ArticlesArea />
          <ContactArea />
        </div>
      </main>
    </>
  );
}
