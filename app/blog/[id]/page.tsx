import React from 'react'
import { Metadata } from 'next'

type Props = {
    params: {
        id: string
    }
}
export async function generateMetadata({
    params: { id },
}: Props): Promise<Metadata> {
    const post = await getData(id)
    return {
        title: post.title,
    }
}

async function getData(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: { revalidate: 60 },
        }
    )
    return response.json()
}

async function Post({ params: { id } }: Props) {
    const post = await getData(id)
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Post
