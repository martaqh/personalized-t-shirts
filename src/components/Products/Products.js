import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  console.log(products);
  const [currentColor] = useState(productsData[0].colors[0]);
  console.log(currentColor);
  const [currentSize] = useState(productsData[0].sizes[0].name);
  console.log(currentSize);

  return (
    <section>
      {products.map(product => <Product size={currentSize} color={currentColor} key={product.id} {...product} />)}
    </section>
  );
};


export default Products;