import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-blue-50 text-gray-900">

            <div className="flex flex-col items-center justify-center text-center px-6 py-24">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Kevin Ritthaworn</h1>
                <h2 className="text-xl mb-6">Full-Stack Software Engineer • MVP Specialist • Web App Builder</h2>

                <p className="text-xl max-w-xl mb-6">
                    I build clean, scalable web applications — from intuitive UIs to backend APIs — using modern full-stack tools.
                </p>
                <div className="flex gap-4">
                    <Link
                        to="/projects"
                        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            <section className="bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">What I Do</h2>
                    <p className="text-gray-700 mb-6">
                        I help startups and small businesses bring their ideas to life online. Whether you're starting from scratch or need technical help growing an existing product, I deliver reliable solutions with a focus on clean design, fast performance, and future scalability.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">✅ Full-Stack Development</h3>
                            <p className="text-gray-600">From frontend UIs to backend logic, I build production-ready apps end to end.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">🚀 MVPs & Prototypes</h3>
                            <p className="text-gray-600">Need to test an idea quickly? I build and ship lean MVPs that get real user feedback fast.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">🧠 Tech Strategy</h3>
                            <p className="text-gray-600">I guide clients on choosing the right tools, architecture, and deployment strategies.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;



