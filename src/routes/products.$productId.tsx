import {createFileRoute, useParams, useRouter} from '@tanstack/react-router'
import {useEffect} from "react";
import {Button} from "@/components/ui/button.tsx";

const ProductPage = () => {

    const {history} = useRouter()
    const params = useParams({
        from: '/products/$productId',
        select: ({productId}) => ({productId}),
    });

    useEffect(() => {
        console.log({params})
    }, []);

    return (
        <div>
            <h1>Product Page {params.productId}</h1>
            <Button variant="outline" onClick={() => history.go(-1)}>Go Back</Button>
        </div>
    )
}

export const Route = createFileRoute('/products/$productId')({
    component: ProductPage,
    notFoundComponent: () => <div>Product not found</div>,
});






