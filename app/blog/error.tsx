'use client'

export default function errorWrapper({ error }: { error: Error }) {
    return <h1>Oops... {error.message}</h1>
}
