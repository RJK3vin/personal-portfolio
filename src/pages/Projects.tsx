export default function Projects() {
    return (
        <div className = "p-6 text-white">
            <h1 className  = "text-3xl font-bold mb-4">Projects</h1>
            <div className = "mb-6">
                <h2 className = "text-2xl font-semibold">EasyGradPath 📚</h2>
                <p className = "mt-2">A Notion-based productivity system for students that auto-prioritizes tasks and tracks progress.</p>
                <iframe
                    src="https://chill-helicopter-d36.notion.site/EasyGradPlan-Your-Easiest-Path-to-Graduation-21191add595480f2af17c6049ef657cc"
                    className = "w-full h-[600px] mt-4 rounded-xl border border-gray-300"
                    allowFullScreen
                />
            </div>
        </div>
    )
}