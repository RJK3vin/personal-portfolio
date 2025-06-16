import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    return (
        <div className = "flex-1 p-6 max-w-4xl mx-auto">
            <h1 className = "text-4xl font-bold mb-6">Projects</h1>
            <ProjectCard 
                title = "EasyGradPath 📚"
                description = "A Notion-based productivity system that helps students proritize and graduate efficiently."
                link="https://chill-helicopter-d36.notion.site/EasyGradPlan-Your-Easiest-Path-to-Graduation-21191add595480f2af17c6049ef657cc"
            />
        </div>
    )
}