import styles from './Product.module.scss';


import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  console.log(currentColor, currentSize)
  
  const getPrice = () =>{
    let chosenSizeData = props.sizes.find(elem => elem.name === currentSize);
    let addPrice = chosenSizeData.additionalPrice;
    return props.basePrice + addPrice;
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} color={currentColor}></ProductImage>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          currentColor={currentColor}
          currentSize={currentSize}
          actionColor={setCurrentColor}
          actionSize={setCurrentSize}
          getPrice={getPrice}
          name={props.name}
          sizes={props.sizes}
          colors={props.colors}
        ></ProductForm>
      </div>
    </article>
  )
};

Product.propTypes = {
  data: PropTypes.array,
}

export default Product;