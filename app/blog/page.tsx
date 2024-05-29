import React from 'react'
import Link from 'next/link'

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 60 },
    })

    if (!response.ok) {
        throw new Error('Unable to fetch posts!')
    }
    return response.json()
}

async function Blog() {
    const posts = await getData()
    return (
        <div>
            <h1 className={'title'}>Blog</h1>
            <Link href={'/blog/new'}>Create post</Link>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog
