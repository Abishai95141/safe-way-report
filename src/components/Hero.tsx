import { motion } from "framer-motion";
import { BubbleMenu } from "./BubbleMenu";
import { FuzzyText } from "./FuzzyText";
import { DecryptedText } from "./DecryptedText";
import { StarBorder } from "./StarBorder";
import profileImage from "@/assets/profile.png";
import { Brain, Cpu, Network, Sparkles, Zap, Database, Code, Bot } from "lucide-react";
const menuItems = [{
  label: "home",
  href: "#",
  ariaLabel: "Home",
  rotation: -8,
  hoverStyles: {
    bgColor: "#3b82f6",
    textColor: "#ffffff"
  }
}, {
  label: "about",
  href: "#",
  ariaLabel: "About",
  rotation: 8,
  hoverStyles: {
    bgColor: "#10b981",
    textColor: "#ffffff"
  }
}, {
  label: "projects",
  href: "#",
  ariaLabel: "Projects",
  rotation: 8,
  hoverStyles: {
    bgColor: "#f59e0b",
    textColor: "#ffffff"
  }
}, {
  label: "blog",
  href: "#",
  ariaLabel: "Blog",
  rotation: 8,
  hoverStyles: {
    bgColor: "#ef4444",
    textColor: "#ffffff"
  }
}, {
  label: "contact",
  href: "#",
  ariaLabel: "Contact",
  rotation: -8,
  hoverStyles: {
    bgColor: "#8b5cf6",
    textColor: "#ffffff"
  }
}];
export const Hero = () => {
  const doodleIcons = [
    { Icon: Brain, x: "10%", y: "20%", size: 32, rotation: -15, delay: 0 },
    { Icon: Cpu, x: "85%", y: "15%", size: 28, rotation: 20, delay: 0.2 },
    { Icon: Network, x: "15%", y: "70%", size: 36, rotation: 10, delay: 0.4 },
    { Icon: Sparkles, x: "75%", y: "75%", size: 24, rotation: -20, delay: 0.6 },
    { Icon: Zap, x: "5%", y: "45%", size: 30, rotation: 15, delay: 0.8 },
    { Icon: Database, x: "90%", y: "50%", size: 32, rotation: -10, delay: 1 },
    { Icon: Code, x: "20%", y: "85%", size: 28, rotation: 25, delay: 1.2 },
    { Icon: Bot, x: "80%", y: "30%", size: 34, rotation: -25, delay: 1.4 },
  ];

  return <div className="relative min-h-screen bg-background overflow-hidden">
      {/* AI/ML Doodle Icons */}
      {doodleIcons.map((doodle, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none opacity-[0.08]"
          style={{ 
            left: doodle.x, 
            top: doodle.y,
            rotate: doodle.rotation
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 0.08, 
            scale: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 3,
            delay: doodle.delay,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <doodle.Icon size={doodle.size} className="text-foreground" />
        </motion.div>
      ))}

      {/* Navigation */}
      <BubbleMenu logo={<span style={{
      fontWeight: 700
    }} className="font-extrabold text-center px-px mx-0">A</span>} items={menuItems} menuAriaLabel="Toggle navigation" menuBg="#ffffff" menuContentColor="#111111" useFixedPosition={false} animationEase="back.out(1.5)" animationDuration={0.5} staggerDelay={0.12} />

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column */}
          <motion.div className="flex flex-col justify-center space-y-8" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
                <FuzzyText baseIntensity={0.2} enableHover={true}>
                  Abishai K C
                </FuzzyText>
              </h1>
            </div>

            {/* Caption */}
            <div className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-light">
              <DecryptedText text="Designing Intelligence" animateOn="view" revealDirection="center" speed={100} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <StarBorder as="button" className="bg-background text-foreground hover:bg-foreground hover:text-background transition-colors duration-300" color="black" speed="2.5s">
                My Resume
              </StarBorder>
              <StarBorder as="button" className="bg-foreground text-background hover:bg-background hover:text-foreground transition-colors duration-300" color="black" speed="2.5s">
                Contact Me
              </StarBorder>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div className="relative flex items-center justify-center lg:justify-end" initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <div className="relative w-full max-w-xl aspect-square">
              {/* Gradient overlay for fade effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
              
              {/* Profile Image */}
              <motion.img src={profileImage} alt="Abishai K C - Portfolio" className="w-full h-full object-cover rounded-3xl" initial={{
              scale: 0.9,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 1,
              delay: 0.6
            }} />

              {/* Decorative elements */}
              <motion.div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-foreground/20 rounded-full" animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} />
              <motion.div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-foreground/20 rounded-full" animate={{
              rotate: -360
            }} transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};