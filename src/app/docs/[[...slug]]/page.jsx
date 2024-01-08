export default function Docs({ params }) {
    if (params.slug.length === 2) {
        return <div>Page {params.slug[0]} and second slug {params.slug[1]}</div>
    } else if (params.slug.length === 1) {
        return <div>Page {params.slug[0]}</div>
    } else {
        return <div>Docs home page</div>
    }
}