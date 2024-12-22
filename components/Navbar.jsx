import Link from 'next/link'

const links = [
    { href: '/client', label: 'client' },
    { href: '/drinks', label: 'drinks' },
    { href: '/tasks', label: 'tasks' },
    { href: '/query', label: 'query' },
]

const Navbar = () => {
    return (
        <nav className='py-4 bg-base-300'>
            <div clasName='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
                <Link href='/' className='mx-4 btn btn-info'>Nextjs</Link>
                <ul className='menu menu-horizontal md:ml-8'>
                    {links.map(link => {
                        return <li key={link.href}>
                            <Link href={link.href} className='capitalize'>{link.label}</Link>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
