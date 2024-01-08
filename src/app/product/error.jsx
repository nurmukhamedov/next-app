"use client"
export default function ErrorBoundary({ error, reset }) {
    return (
        <div>
            <h1>{error.message}</h1>
        </div>
    )
}