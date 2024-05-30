import {createFileRoute, Outlet} from '@tanstack/react-router'

const Products = () => {
  return (
      <div>
        <h1>Products Main Page</h1>
        <Outlet />
      </div>
  )
}


export const Route = createFileRoute('/products')({
  component: Products
})

