export default function Contact() {
  return (
    <div className="flex-1 p-6 max-w-2xl mx-auto text-gray-800 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Let's Work Together</h1>
      <p className="text-lg mb-6 text-center">
        I'm currently open to freelance opportunities, startup collaborations, or long-term client partnerships.
        If you're building something meaningful and need a reliable full-stack developer — let's talk.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
        <p className="mb-2">
          📧 <strong>Email:</strong>{" "}
          <a href="mailto:rj.ritthaworn@icloud.com" className="text-blue-600 underline">
            rj.ritthaworn@icloud.com
          </a>
        </p>
        <p className="mb-2">
          🔗 <strong>GitHub:</strong>{" "}
          <a href="https://github.com/RJK3vin" className="text-blue-600 underline">
            github.com/RJK3vin
          </a>
        </p>
        <p>
          📱 <strong>Phone:</strong>{" "}
          <span className="text-gray-700">240-893-1472</span>
        </p>
      </div>
    </div>
  );
}

