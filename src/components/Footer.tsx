export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-6 text-center border-t border-gray-200 mt-10">
            <p className="text-sm">
                © {new Date().getFullYear()} Kevin Ritthaworn. Full-Stack Software Engineer.
            </p>
        </footer>
    );
}