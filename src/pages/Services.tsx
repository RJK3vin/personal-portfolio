export default function Services() {
    return (
        <div className = "flex-1 p-6 max-w-3xl mx-auto">
            <h1 className = "text-4xl font-bold mb-4">Services</h1>
            <p className = "mb-6 text-lg">I specialize in helping individuals, startups, and small businesses turn ideas into working products.</p>
            <ul className = "space-y-4">
                <li>
                    <h2 className = "text-2xl font-semibold">📦 MVP Development</h2>
                    <p className = "text-gray-300">Fast, functional prototypes to help you validate your startup or app idea.</p>
                </li>
                <li>
                    <h2 className = "text-2xl font-semibold">🧑‍💻 💻 Website Design & Build</h2>
                    <p className = "text-gray-300">Custom websites using React, Tailwind, and modern desgin principles.</p>
                </li>
                <li>
                    <h2 className = "text-2xl font-semibold">⚙️ Technical Consulting</h2>
                    <p className = "text-gray-300">Need advice on hosting, stacks, or deployment? I can help guide your technical decisions.</p>
                </li>
            </ul>
        
        </div>
    )
}