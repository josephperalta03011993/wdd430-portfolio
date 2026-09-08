import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "D-TRAC",
    description:
      "A web-based deployment monitoring system used to track merchandiser deployment and status information.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    link: "https://rgcd-trac.com",
  },
  {
    title: "TRADEPAD",
    description:
      "An inventory management web application designed to help manage inventory and sales-related operations.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    link: "https://rgctradepad.com",
  },
];

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          My Portfolio
        </h1>

        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React.
          Here are some of the projects I have worked on.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}