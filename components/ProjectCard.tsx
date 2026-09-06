// Reusable project card
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="p-6 border rounded-lg shadow-sm bg-white">
      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-gray-700 mb-4">
        {description}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>

      {link && (
        <p className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}