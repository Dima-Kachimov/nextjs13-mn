import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav className={'container'}>
                <Link href={'/'}>Home</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/about'}>About</Link>
            </nav>
        </header>
    )
}

export default Header
