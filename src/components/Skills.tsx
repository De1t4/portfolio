import { motion } from "motion/react";
import { fadeInGroup, staggerContainer } from "../utils/Animations";
import type { ReactNode } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiMui,
  SiSpringboot,
  SiPython,
  SiFastapi,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiFigma,
  SiCloudinary,
  SiMercadopago,
  SiVercel,
} from "react-icons/si";
import { Boxes } from "lucide-react";

// Icon map for each skill
const skillIcons: Record<string, ReactNode> = {
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  HTML5: <SiHtml5 />,
  "Tailwind CSS": <SiTailwindcss />,
  "Material UI": <SiMui />,
  Zustand: <Boxes className="w-4 h-4" />,
  "Spring Boot": <SiSpringboot />,
  Java: <span className="font-bold text-xs leading-none">J</span>,
  Python: <SiPython />,
  FastAPI: <SiFastapi />,
  Prisma: <SiPrisma />,
  Supabase: <SiSupabase />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  Git: <SiGit />,
  Docker: <SiDocker />,
  Figma: <SiFigma />,
  Cloudinary: <SiCloudinary />,
  "Mercado Pago": <SiMercadopago />,
  Scrum: <span className="font-bold text-xs leading-none">S</span>,
  Vercel: <SiVercel />,
};

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "Tailwind CSS",
      "Material UI",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Java", "Python", "Prisma", "Supabase"],
  },
  {
    title: "Bases de Datos",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Herramientas",
    skills: [
      "Git",
      "Docker",
      "Figma",
      "Cloudinary",
      "Mercado Pago",
      "Scrum",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="font-montserrat font-black text-3xl md:text-4xl text-center mb-2 text-gray-100 tracking-tight">
          Tech Stack
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-md mx-auto text-sm md:text-base">
          Las tecnologías y herramientas con las que trabajo día a día.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInGroup}
              className="bg-gray-900/40 backdrop-blur-md border border-gray-800/80 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.04)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle inner glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-300" />

              <h3 className="font-montserrat font-bold text-lg text-emerald-400 mb-5 relative z-10">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3.5 py-2 rounded-xl bg-gray-800/50 border border-gray-700/60 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/25 transition-all duration-200 cursor-default font-medium inline-flex items-center gap-2"
                  >
                    {skillIcons[skill] && (
                      <span className="text-base flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4">
                        {skillIcons[skill]}
                      </span>
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
