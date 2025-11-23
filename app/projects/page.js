import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "WanderNext – Travel Platform",
    year: "2025",
    desc: "Travel app to explore destinations & events in Dakshina Kannada.",
    tech: ["Supabase", "HTML", "CSS", "Postman"],
    repo: "https://github.com/soniya-kolvekar/wander-next",
    img: "https://drive.google.com/uc?export=view&id=1F-xfAY0Tdj5JWkh4MvbZSQAIiSFPMV0t"
  },
  {
    title: "Restaurant Replica – UI Clone",
    year: "2025",
    desc: "Pixel-perfect responsive restaurant UI clone.",
    tech: ["Next.js", "React", "Tailwind", "Responsive Web Design"],
    repo: "https://github.com/soniya-kolvekar/resturant-replica",
    img: "https://drive.google.com/uc?export=view&id=1N75guKZFsl1WwZrSWw7ZLzRnSsVrdXKJ"
  },
  {
    title: "EarnEasy – E-Commerce Platform",
    year: "2025",
    desc: "Add page + UI development, JWT and Google OAuth.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "OAuth"],
    repo: "https://github.com/so-sc/EarnEasy",
    img: "https://drive.google.com/uc?export=view&id=1De2nQyxmxR3jSIhfPq58WRwYWcYIhrdE"
  },
  {
    title: "Event Manager",
    year: "2025",
    desc: "CRUD event listing platform using Firebase.",
    tech: ["React", "Next.js", "Firebase"],
    repo: "https://github.com/soniya-kolvekar/firebase-crud",
    img: "https://drive.google.com/uc?export=view&id=1KSDWYBqrGQUUXlQO_r_HCmKz1yDTJxrE"
  }
];

export default function Projects() {
  return (
    <section
      className="
        min-h-screen 
        px-6 md:px-20 py-10

        bg-gradient-to-b 
        from-blue-50 via-white to-white
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-950
      "
    >
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
