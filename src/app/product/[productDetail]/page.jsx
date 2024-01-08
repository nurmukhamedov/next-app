import { notFound } from "next/navigation"
export default function ProductDetail({ params }) {

    if (params.productDetail > 100) {
        notFound()
    }


    return <div>Product Detail {params.productDetail}</div>
}