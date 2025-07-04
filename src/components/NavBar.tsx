import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/freelance_logo.png'

const navItems = [
    { label: 'Home', path: '/'},
    { label: 'About', path: '/about'},
    { label: 'Projects', path: '/projects'},
    { label: 'Testimonials', path: '/testimonials'},
    { label: 'Services', path: '/services'},
    { label: 'Contact', path: '/contact'},
]

export default function NavBar() {
    const location = useLocation()

    return (
        <nav className = "bg-white shadow-md px-6 py-4 flex justify-between items-center stick top-0 z-50">
            <Link to="/" className='flex items-center space-x-2 h-[60px] overflow-hidden'>
                <img src={logo} alt="KR Web Studio Logo" className='h-[170px] w-auto object-contain'/>
            </Link>
            <div className = "space-x-6">
                {navItems.map(item => (
                    <Link 
                        key = {item.path}
                        to = {item.path}
                        className = {`text-gray-800 hover:text-blue-600 transition font medium ${location.pathname === item.path ? 'text-blue-600 underline' : ''}`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}