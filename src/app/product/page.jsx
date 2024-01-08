export default function Product() {

    function getRandom(count) {
        return Math.floor(Math.random() * count)
    }

    const random = getRandom(2);

    if (random === 1) {
        throw new Error('Error loading page')
    }

    return <div>Product page</div>
}