export default async function Posts({ posts }) {

    return (
        <>
            <ul>
                Posts
                {posts.map((album, index) => (
                    <li key={index}>{album.title}</li>
                ))}
            </ul>
        </>

    )

} 