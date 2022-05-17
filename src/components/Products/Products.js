import { useState } from 'react';
import shortid from 'shortid';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  const [currentColor, setCurrentColor] = useState(productsData[0].colors[0]);
  const [currentSize, setCurrentSize] = useState(productsData[0].sizes[0].name);
  console.log(currentColor, currentSize);
  
  return (
    <section>
      {products.map(product => <Product size={currentSize} color={currentColor} actionSize={setCurrentSize} actionColor={setCurrentColor} key={product.id} {...product} />)}
    </section>
  );
};


export default Products;