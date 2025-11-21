import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
export const About = () => {
  const skills = ["Python programming", "Applied Data Science", "Machine Learning & Deep Learning", "Data Analytics", "Git & GitHub", "Fine-tuning & RAG"];
  return <section className="relative w-full bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div className="mb-16 text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            About
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Large Card - Who I Am */}
          <motion.div className="md:col-span-2 lg:row-span-2" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }}>
            <SpotlightCard className="h-full flex flex-col justify-center" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who I Am
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed font-semibold">
                I am an AI practitioner who believes that the best code is the kind that can be explained. My background spans Machine Learning, Deep Learning, and LLMs, honed through competitive datathons and internship roles. I love the challenge of research, but I'm equally passionate about communication, breaking down technical complexity to collaborate effectively and drive meaningful results.
              </p>
            </SpotlightCard>
          </motion.div>

          {/* Medium Card - Arsenal */}
          <motion.div className="lg:row-span-2" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <SpotlightCard className="h-full flex flex-col" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Arsenal
              </h3>
              <ul className="space-y-3 flex-1">
                {skills.map((skill, index) => <motion.li key={skill} initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1
              }} className="flex items-start text-foreground/80 font-semibold">
                    <span className="mr-3 text-foreground font-bold">•</span>
                    <span className="font-semibold">{skill}</span>
                  </motion.li>)}
              </ul>
            </SpotlightCard>
          </motion.div>

          {/* Small Card - Location */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <SpotlightCard className="h-full flex flex-col justify-center items-center text-center" spotlightColor="rgba(0, 229, 255, 0.2)">
              <MapPin className="w-12 h-12 text-foreground mb-4" />
              <p className="text-lg text-foreground/80 font-semibold">
                Based in India,
                <br />
                Tamil Nadu, Chennai
              </p>
            </SpotlightCard>
          </motion.div>

          {/* Small/Medium Card - Current Status */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <SpotlightCard className="h-full flex flex-col justify-center items-center text-center" spotlightColor="rgba(0, 229, 255, 0.2)">
              <motion.div animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <Sparkles className="w-12 h-12 text-foreground mb-4" />
              </motion.div>
              <p className="text-lg text-foreground/80 font-semibold">
                Currently Researching
                <br />
                on AI agents & SLMs
              </p>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>;
};