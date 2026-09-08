interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <section className="mt-8 p-6 bg-gray-50 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="p-3 bg-white border rounded text-center"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}