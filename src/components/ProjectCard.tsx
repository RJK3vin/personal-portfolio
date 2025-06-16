interface ProjectCardProps {
    title: string
    description : string
    link: string
}

export default function ProjectCard({ title, description, link}: ProjectCardProps) {
    return (
        <div className = "bg-gray-800 p-6 rounded-xl shadow-md mb-6">
            <h2 className = "text-2xl font-semibold text-white mb-2">{title}</h2>
            <p className = "text-gray-300 mb-4">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className = "inlinde-block bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
                View Project →
            </a>
        </div>
    )
}