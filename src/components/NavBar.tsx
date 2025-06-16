import { Link, useLocation } from 'react-router-dom'

const navItems = [
    { label: 'Home', path: '/'},
    { label: 'About', path: '/about'},
    { label: 'Projects', path: '/projects'},
    { label: 'Services', path: '/services'},
    { label: 'Contact', path: '/contact'},
]

export default function NavBar() {
    const location = useLocation()

    return (
        <nav className = "bg-black text-white px-6 py-4 shadow-lg flex justify-between items-center">
            <h1 className = "text-xl font-bold tracking-wide">Kevin.dev</h1>
            <div className = "space-x-6">
                {navItems.map(item => (
                    <Link 
                        key = {item.path}
                        to = {item.path}
                        className = {`hover:text-blue-400 transition ${location.pathname === item.path ? 'text-blue-400 underline' : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}