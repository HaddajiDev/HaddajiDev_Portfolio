"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowDown, Code, Gamepad2, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { projects, personalInfo, skills } from "@/lib/data"
import { useCursor } from "@/hooks/use-cursor"

export default function Portfolio() {
  useCursor()

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-900/20 opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-800/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="z-10 text-center px-4">
        <div className="mb-4">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-gradient">{personalInfo.name}</h1>
        </div>

        <div className="typewriter-container mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-purple-500/20">
              <Code className="w-5 h-5 text-purple-400" />
              <span className="typewriter" data-text="Web Developer">
                Web Developer
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-purple-500/20">
              <Gamepad2 className="w-5 h-5 text-purple-400" />
              <span className="typewriter" data-text="Game Developer">
                Game Developer
              </span>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-pulse-slow">
          Creating immersive digital experiences through code and design
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  )
}

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            About Me
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-1 gap-8 items-center"
        >
          <div className="code-editor-container bg-gray-950 rounded-xl overflow-hidden border border-purple-500/20 shadow-xl">
            <div className="code-editor-header bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400">ahmed_haddaji.js</div>
              <div className="w-4"></div>
            </div>

            <div className="code-editor-content p-6 font-mono text-sm md:text-base relative overflow-hidden">
              <div className="line-numbers absolute left-0 top-0 p-6 text-gray-600 select-none">
                {Array.from({ length: 33 }, (_, i) => (
                  <div key={i} className="line-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>

              <div className="code-content pl-12">
                <div>
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">Ahmed_Haddaji</span>{" "}
                  {`{`}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">constructor</span>() {`{`}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">this</span>.<span className="text-green-300">name</span> ={" "}
                  <span className="text-orange-300">'{personalInfo.name}'</span>;
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">this</span>.<span className="text-green-300">age</span> ={" "}
                  <span className="text-orange-300">'{personalInfo.age}'</span>;
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">this</span>.<span className="text-green-300">email</span> ={" "}
                  <span className="text-orange-300">'{personalInfo.email}'</span>;
                </div>
                <div className="pl-4">{`}`}</div>
                <div className="pl-4"></div>
                <div className="pl-4">
                  <span className="text-purple-400">workExperience</span>() {`{`}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">return</span> [
                </div>
                {personalInfo.workExperience.map((exp, index) => {
                  const [period, role] = Object.entries(exp)[0]
                  return (
                    <div key={index} className="pl-12">
                      {`{ `}
                      <span className="text-orange-300">'{period}'</span> :{" "}
                      <span className="text-orange-300">'{role}'</span> {`}`},
                    </div>
                  )
                })}
                <div className="pl-8">];</div>
                <div className="pl-4">{`}`}</div>
                <div className="pl-4"></div>
                <div className="pl-4">
                  <span className="text-purple-400">education</span>() {`{`}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">return</span> [
                </div>
                {personalInfo.education.map((edu, index) => {
                  const [period, institution] = Object.entries(edu)[0]
                  return (
                    <div key={index} className="pl-12">
                      {`{ `}
                      <span className="text-orange-300">'{period}'</span> :{" "}
                      <span className="text-orange-300">'{institution}'</span> {`}`}
                      {index < personalInfo.education.length - 1 ? "," : ""}
                    </div>
                  )
                })}
                <div className="pl-8">];</div>
                <div className="pl-4">{`}`}</div>
                <div className="pl-4"></div>
                <div className="pl-4">
                  <span className="text-purple-400">skills</span>() {`{`}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">return</span> [
                </div>
                {/* Group skills into chunks of 5 for better display */}
                {Array.from({ length: Math.ceil(personalInfo.skills.length / 5) }).map((_, chunkIndex) => (
                  <div key={chunkIndex} className="pl-12">
                    {personalInfo.skills.slice(chunkIndex * 5, chunkIndex * 5 + 5).map((skill, i) => (
                      <span key={i}>
                        <span className="text-orange-300">'{skill}'</span>
                        {chunkIndex * 5 + i < personalInfo.skills.length - 1 ? ", " : ""}
                      </span>
                    ))}
                    {chunkIndex < Math.ceil(personalInfo.skills.length / 5) - 1 ? "," : ""}
                  </div>
                ))}
                <div className="pl-8">];</div>
                <div className="pl-4">{`}`}</div>
                <div>{`}`}</div>
              </div>

              <div className="cursor-blink absolute"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-800/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.web.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="px-3 py-1 bg-gray-800 text-purple-300 rounded-full text-sm border border-purple-500/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold">Game Development</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.game.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="px-3 py-1 bg-gray-800 text-purple-300 rounded-full text-sm border border-purple-500/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, type, index } : any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden group"
    >
      <div className="h-48 bg-gradient-to-br from-purple-900/40 to-gray-800/40 relative overflow-hidden">
        <img
          src={project.images?.[0] || `/placeholder.svg?height=300&width=500`}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {type === "web" ? (
            <></>
            // <Code className="w-16 h-16 text-purple-400/70 group-hover:text-purple-400 transition-all duration-300" />
          ) : (
            <></>// <Gamepad2 className="w-16 h-16 text-purple-400/70 group-hover:text-purple-400 transition-all duration-300" />
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag : any) => (
            <span key={tag} className="px-2 py-1 bg-gray-800 text-purple-300 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            href={`/projects/${type}/${project.slug}`}
            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 group-hover:underline"
          >
            View Project
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">A showcase of my work across web and game development</p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <Code className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-semibold">Web Development Projects</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.web.map((project, index) => (
                <ProjectCard key={project.slug} project={project} type="web" index={index} />
              ))}
            </div>
          </div>

          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.1}}
              className="flex items-center gap-3 mb-8"
            >
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-semibold">Game Development Projects</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.game.map((project, index) => (
                <ProjectCard key={project.slug} project={project} type="game" index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-purple-900/10 opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-800/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">Interested in working together? Feel free to reach out!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-gray-300">
              Whether you have a project in mind or just want to chat about technology, I'm always open to new
              opportunities and collaborations.
            </p>

            <div className="space-y-4">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </Link>

              <Link
                href="https://github.com/HaddajiDev"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/HaddajiDev</span>
              </Link>

              <Link
                href="www.linkedin.com/in/ahmed-haddaji-b70953299"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/ahmedhaddaji</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
