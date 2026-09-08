// About page
import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          About Me
        </h1>

        <p className="text-lg text-gray-700">
          I'm a full-stack developer with experience building
          web applications using Laravel, PHP, MySQL, and
          modern frontend technologies. I'm currently expanding
          my skills by learning React, Next.js, and TypeScript.
        </p>
      </section>

      <SkillCard
        title="Technical Skills"
        skills={[
          "PHP",
          "Laravel",
          "MySQL",
          "JavaScript",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ]}
      />
    </main>
  );
}