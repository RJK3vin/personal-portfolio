export default function Services() {
    return (
        <div className = "flex-1 p-6 max-w-3xl mx-auto">
            <h1 className = "text-4xl font-bold mb-6">Services</h1>
            <div className = "space-y-6 text-gray-200">
                <div>
                    <h2 className = "text-2xl font-semibold">📦 MVP Development</h2>
                    <p>Fast, functional prototypes to help you validate your startup or app idea.</p>
                </div>
                <div>
                    <h2 className = "text-2xl font-semibold">🧑‍💻 💻 Website Design & Build</h2>
                    <p>Custom websites using React, Tailwind, and modern desgin principles.</p>
                </div>
                <div>
                    <h2 className = "text-2xl font-semibold">⚙️ Technical Consulting</h2>
                    <p>Need advice on hosting, stacks, or deployment? I can help guide your technical decisions.</p>
                </div>
            </div>
        </div>
    )
}