import Posts from "./Posts";

async function getAlbums() {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=100');
    const albums = await response.json();
    console.log('Albums fetching');
    return albums;
}

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await response.json();
    console.log('Posts fetching')
    return posts;
}

export default async function Album() {

    const postsPromise = getPosts();
    const albumsPromise = getAlbums();

    const [posts, albums] = await Promise.all([postsPromise, albumsPromise])

    return (
        <>
            <ul>
                Albums
                {albums.map((album, index) => (
                    <li key={index}>{album.title}</li>
                ))}
            </ul>
            <Posts posts={posts} />
        </>

    )

} 