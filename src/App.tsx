/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Database, 
  Layout, 
  Award,
  Users,
  ChevronRight,
  Download
} from "lucide-react";

const HERO_IMAGE = "/src/assets/images/hero_ai_tech_1793629911110.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SectionHeading = ({ children, number }: { children: React.ReactNode; number?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-4 mb-2">
      {number && <span className="text-blue-500 font-mono text-sm">{number}.</span>}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        {children}
      </h2>
    </div>
    <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-purple-500" />
  </div>
);

const ProjectCard = ({ title, description, tags, type }: { title: string; description: string; tags: string[]; type: string }) => (
  <motion.div 
    variants={fadeIn}
    className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
  >
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <span className="text-xs font-medium text-blue-500 uppercase tracking-widest">{type}</span>
        <h3 className="text-xl font-bold mt-1 text-slate-900 dark:text-slate-100 group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-500 dark:text-slate-400">
        {tags.map((tag, idx) => (
          <span key={tag}>
            {tag}{idx < tags.length - 1 && <span className="ml-2 text-slate-300 dark:text-slate-700">·</span>}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceItem = ({ role, company, period, description, logo }: { role: string; company: string; period: string; description: string[]; logo?: string }) => (
  <motion.div variants={fadeIn} className="relative pl-8 pb-12 last:pb-0">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
    
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
      <div className="flex items-center gap-4">
        {logo ? (
          <img src={logo} alt={company} className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 p-1 object-contain" />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <Globe className="w-6 h-6 text-slate-400" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{role}</h3>
          <p className="text-blue-500 font-medium">{company}</p>
        </div>
      </div>
      <span className="text-sm font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full h-fit">
        {period}
      </span>
    </div>
    <ul className="mt-4 space-y-2">
      {description.map((bullet, idx) => (
        <li key={idx} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-3">
          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
          {bullet}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] selection:bg-blue-500/30">
      {/* Header - Top Bar Contract */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <a href="#" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white shrink-0">
            DASUNI<span className="text-blue-500">.</span>G
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-500 transition-colors whitespace-nowrap">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors whitespace-nowrap">Experience</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors whitespace-nowrap">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors whitespace-nowrap">Skills</a>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href="/public/assets/aistudio/Resume_Dasuni_G__2__6ce24e37.pdf" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all whitespace-nowrap"
            >
              <Download className="w-3 h-3" />
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Software & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">AI Engineer</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
                4.5+ years of experience crafting high-performance full-stack applications. 
                Currently specializing in AI Model Evaluation and Computer Vision at Macquarie University.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:dasunin30@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-transform hover:scale-105">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/dasuni-30" target="_blank" className="p-3 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/In/dasuni-geeganage-24b677139" target="_blank" className="p-3 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/9] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={HERO_IMAGE} 
                alt="AI Visualization" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 p-6 rounded-2xl border border-white/10">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-widest mb-1">Experience</p>
                      <p className="text-2xl font-bold text-white">4.5+ Years</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-300 uppercase tracking-widest mb-1">Location</p>
                      <p className="text-2xl font-bold text-white">Sydney, AU</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/20">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading number="01">Professional Experience</SectionHeading>
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <ExperienceItem 
                role="AI Engineer Intern"
                company="Truuth"
                period="Aug 2026 - Present"
                logo="https://logo.clearbit.com/truuth.id"
                description={[
                  "Research and evaluate AI-generated image detection approaches using synthetic-image datasets.",
                  "Prepare datasets and run model evaluation inference workflows, analyzing TPR/FPR behavior.",
                  "Utilize AWS S3 and SageMaker for data management and model training workflows.",
                  "Support QA testing before product releases using scenario-based testing."
                ]}
              />
              <ExperienceItem 
                role="Membership Project Intern"
                company="BioNSW"
                period="Oct 2025 - Present"
                logo="https://logo.clearbit.com/bionsw.com.au"
                description={[
                  "Manage and update membership information, payment records and subscription data.",
                  "Create email campaigns and marketing materials using Canva.",
                  "Resolve website content, layout and usability issues."
                ]}
              />
              <ExperienceItem 
                role="Full-Stack Developer"
                company="Hustlebook"
                period="Oct 2025 - Dec 2025"
                description={[
                  "Developed and maintained React-based application features.",
                  "Integrated Firebase/Firestore for product and customer data management.",
                  "Implemented Stripe payment functionality and secure payment handling.",
                  "Resolved UI/UX issues and tested end-to-end user flows."
                ]}
              />
              <ExperienceItem 
                role="Senior Software Engineer"
                company="WSO2 Inc."
                period="Feb 2024 - Feb 2025"
                logo="https://logo.clearbit.com/wso2.com"
                description={[
                  "Developed features for WSO2 Identity Server and Asgardeo IAM products.",
                  "Led team sync-ups and coordinated development activities within a small engineering team.",
                  "Developed React-based SDKs focusing on API-based authentication and authorization.",
                  "Co-mentored intern projects focused on React SDK development."
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading number="02">Selected Projects</SectionHeading>
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <ProjectCard 
                type="Artificial Intelligence"
                title="Deep Fake Detection"
                description="Evaluating AI-generated image detection models using synthetic datasets and performing threshold analysis with TPR/FPR metrics."
                tags={["Python", "Tensorflow", "AWS", "SageMaker"]}
              />
              <ProjectCard 
                type="Frontend Engineering"
                title="Asgardeo React SDK"
                description="Developing open-source React SDKs and components for seamless identity and access management integration."
                tags={["React", "TypeScript", "OAuth2", "OIDC"]}
              />
              <ProjectCard 
                type="Computer Vision"
                title="Neural Solution"
                description="Built a computer vision solution using Convolutional Neural Networks (CNN) for image classification tasks."
                tags={["Python", "Keras", "Tensorflow", "OpenCV"]}
              />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading number="03">Technical Toolkit</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Frontend", icon: Layout, skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"] },
                { title: "Backend", icon: Code2, skills: ["Node.js", "REST APIs", "Firebase", "Stripe"] },
                { title: "AI & ML", icon: Cpu, skills: ["Computer Vision", "Tensorflow", "Keras", "Model Evaluation"] },
                { title: "Tools & Cloud", icon: Database, skills: ["AWS", "Azure", "Git", "Figma", "Cypress"] }
              ].map((group, idx) => (
                <motion.div 
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <group.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Awards */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading>Education</SectionHeading>
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-blue-500" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Master of IT (Artificial Intelligence)</h3>
                  <p className="text-blue-500 font-medium">Macquarie University, Sydney</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">2025 - 2026 (Reading)</p>
                </div>
                <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-purple-500" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">B.Sc. (Hons) in Computer Science</h3>
                  <p className="text-blue-500 font-medium">University of Colombo, Sri Lanka</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">2017 - 2021 · First Class</p>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading>Awards & Recognition</SectionHeading>
              <div className="grid gap-4">
                {[
                  { title: "Google Women Techmakers Ambassador", year: "2022-2023" },
                  { title: "Grace Hopper Celebration Scholar", year: "2021" },
                  { title: "Google Women Techmakers Scholar", year: "2019" }
                ].map((award, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{award.title}</h4>
                      <p className="text-xs text-slate-500 font-mono">{award.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community & Leadership */}
        <section className="py-24 bg-blue-600">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Community & Leadership</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { role: "Co-Host & Organiser", org: "Javascript Colombo", year: "2024-2025" },
                { role: "Co-Host", org: "UXhangout", year: "2024-2025" },
                { role: "Chair", org: "IEEE Women in Engineering", year: "2020-2021" }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Users className="w-8 h-8 text-white/80 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-1">{item.org}</h3>
                  <p className="text-white/80 text-sm mb-2">{item.role}</p>
                  <p className="text-white/60 text-xs font-mono">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Dasuni Geeganage. Built with React & Tailwind.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/dasuni-30" className="text-slate-500 hover:text-blue-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/In/dasuni-geeganage-24b677139" className="text-slate-500 hover:text-blue-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:dasunin30@gmail.com" className="text-slate-500 hover:text-blue-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
