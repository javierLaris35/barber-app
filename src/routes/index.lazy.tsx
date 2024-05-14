import TableComponent, { TableHeader } from '@/components/Table/Table'
import { TableActions } from '@/components/Table/TableActions'
import { createLazyFileRoute } from '@tanstack/react-router'
import axios from 'axios'
import { useState, useEffect } from 'react';

const tableHeaderNames: TableHeader[] = [
  { name: 'id', style: ''},
  /*{ name: '', style: 'hidden w-[100px] sm:table-cell', child: <span className="sr-only">Image</span>},*/
  { name: 'name', style: ''},
  { name: 'price', style: 'hidden md:table-cell'},
  { name: 'description', style: 'hidden md:table-cell'},
  { name: 'type', style: 'hidden md:table-cell'},
  { name: 'time', style: 'hidden md:table-cell'},
  { name: 'status', style: ''},
  { name: '', style: '' /*, child: <span className="sr-only">Actions</span>*/}
];

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  type: string;
  time?: string;
  status?: string;
}

const fetchProducts = async () => {
  const response = await axios.get('http://localhost:3000/api/products');
  return response.data; // Suponiendo que la respuesta contiene los datos de los productos
};

const TableProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await fetchProducts();
              console.log("🚀 ~ fetchData ~ data:", data)
              setProducts(data);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      fetchData();
  }, []);

  return (
    <div>
      <TableActions />
      <TableComponent<Product> 
        title='Products' 
        description='Manage your products and view their sales performance.'
        header={tableHeaderNames}
        elements={products}
      />
    </div>
  );
};

export const Route = createLazyFileRoute('/')({
  component: TableProducts
})

