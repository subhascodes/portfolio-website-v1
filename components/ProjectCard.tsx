import { motion } from "framer-motion";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string[];
  tech: string[];
  github: string;
  image?: string;
  index: number; // Add this for alternating animation
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  github,
  image,
  index,
}) => (
  <motion.div
    className="relative bg-black border border-yellow-400 rounded-xl p-6 w-full max-w-xl min-h-[420px] flex flex-col animate-border mx-auto shadow-lg"
    initial={{
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Alternate from left and right
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2, // Stagger the animations
      },
    }}
    viewport={{ once: true, amount: 0.2 }}
    style={{
      background: "linear-gradient(45deg, #000, #111)",
      borderImage: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700) 1",
      animation: "borderGlow 3s ease-in-out infinite",
    }}
  >
    {/* Image at top if available */}
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded mb-4 shadow-md hover:shadow-lg transition-shadow duration-300"
      />
    )}

    {/* Title with GitHub button on same line */}
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-2xl font-bold text-yellow-400">{title}</h2>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white hover:text-yellow-400 transition-all duration-300 text-sm ml-3 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
      >
        <svg
          className="w-5 h-5 mr-3"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.438 9.747 8.205 11.325.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.469-2.382 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.476 5.921.43.371.813 1.102.813 2.222 0 1.606-.015 2.899-.015 3.293 0 .321.218.694.825.576C20.565 22.244 24 17.777 24 12.5 24 5.87 18.627.5 12 .5z" />
        </svg>
        View Repo
      </a>
    </div>

{/* Description */}
<p className="text-gray-300 mb-4 text-base">{description.join(" ")}</p>

    {/* Tech stack badges */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {tech.map((item, idx) => (
        <span
          key={idx}
          className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium border border-yellow-400/30 hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ProjectCard;
