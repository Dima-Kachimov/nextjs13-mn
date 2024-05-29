import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | NextJS App',
}

export default function Home() {
    return <h1 className={'title'}>App</h1>
}
