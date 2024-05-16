import Header from '@/components/Header/Header'
import { createLazyFileRoute } from '@tanstack/react-router'

const Product = () => {
  return (
    <div>
      <Header title='Add Product' subTitle='Add new products.'/>
    </div>
  )
}

export const Route = createLazyFileRoute('/products/product')({
  component: Product
})