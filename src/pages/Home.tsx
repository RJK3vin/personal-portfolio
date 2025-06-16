import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className = "h-[calc(100vh-96px)] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
            <h1 className = "text-5xl md:text-6xl font-extrabold mb-4">Hi, I'm Kevin 👋</h1>
            <p>I build clean, scalable websites, MVPs, and tools for startups and individuals. Let's bring your idea to life.</p>
            <Link to="/projects">
                <button className = "bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                    See My work →
                </button>
            </Link>
        </div>
    )
}
