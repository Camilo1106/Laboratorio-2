import ActionButton from "@/components/action-button";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";
import Sidebar from "@/components/sidebar";
import SkillOutline from "@/components/skill-outline";
import { Separator } from "@/components/ui/separator";
import TodoList from "@/components/todoList";
import PomodoroTimer from "@/components/pomodorotimer"

import {
  Project,
  WorkExperience,
  aboutYou,
  marketingHeadlines,
  projects,
  skills,
  workExperiences,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="md:max-w-3xl mx-auto md:mt-8 ">
      <Navbar />
      <div className="flex flex-col md:flex-row my-10 mx-10 md:mx-0 space-x-0 md:space-x-10 space-y-10 md:space-y-0 ">
        <Sidebar />
        <div className="md:min-w-[65vh] min-w-full space-y-10">
          {/* Hero */}
          <section id="home" key="home" className="space-y-5">
            <div className="text-2xl font-bold tracking-tight">
              {marketingHeadlines.mainHeadline}
            </div>
            <div className="text-muted-foreground">
              {marketingHeadlines.subHeadline}
            </div>
            <div>
              <Separator />
            </div>
            <div className="flex justify-between">
              <ActionButton actionText="Contratame" />
              <div className="space-y-1">
                <h3 className="font-medium leading-none">
                  {aboutYou.yearsOfExperience}
                </h3>
                <p className="text-xs text-muted-foreground">Experiencia</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium leading-none">
                  {aboutYou.location}
                </h3>
                <p className="text-xs text-muted-foreground">Ubicacion</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="space-y-2">
                {skills.map((skill) => (
                  <SkillOutline
                    key={skill.text}
                    Icon={skill.icon}
                    text={skill.text}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Habilidades tecnicas</p>
            </div>
          </section>
          {/* Projects */}
          <section id="projects" key="projects">
            <h2 className="text-2xl font-semibold tracking-tight">Projectos</h2>
            <div>
              <div className="space-y-5 mt-5">
                {projects.map((project: Project) => (
                  <ProjectShowcase key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>
          {/* Work */}
          <section id="work" key="work">
          <h2 className="text-2xl font-semibold tracking-tight">Mini-proyectos</h2>
          <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
            <TodoList/>
            </div>
          </section>
          <section id="work" key="work">
          <h2 className="text-2xl font-semibold tracking-tight">Mini-proyectos</h2>
          <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
            <PomodoroTimer/>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" key="contact">
            <h2 className="text-2xl font-semibold tracking-tight">Contacto</h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
              <p className="p-6 text-sm text-muted-foreground">
                Adquiere mis servicios como desarrolador web:{" "}
                <a href={`mailto:${aboutYou.email}`}>{aboutYou.email}</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
