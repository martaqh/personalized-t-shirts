import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import shortid from 'shortid';
import { useState } from 'react';

//import PropTypes from 'prop-types';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.data[0].colors[0]);
  const [currentSize, setCurrentSize] = useState(props.data[0].sizes[0].name);
  
  const getPrice = () =>{
    let chosenSizeData = props.sizes.find(elem => elem.name === currentSize);
    let addPrice = chosenSizeData.additionalPrice;
    return props.basePrice + addPrice;
  }

  const resumeProduct = e => {
    e.preventDefault();
    console.log('Name: ' + props.name);
    console.log('Size: ' + currentSize);
    console.log('Color: ' + currentColor);
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={e=>resumeProduct(e)}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size =>
              <li key={size}>
                <button
                  type="button"
                  className={clsx(styles.choices, currentSize === size.name && styles.active)}
                  onClick={() => setCurrentSize(size.name)} key={shortid}
                >{size.name}
                </button>
              </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
              <li key={color}>
                <button
                  type="button"
                  className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], color === currentColor && styles.active)}
                  onClick={() => setCurrentColor(color)} key={shortid}
                  >
                </button>
                </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

/*Product.PropTypes = {
  name: PropTypes.string,
  basePrice: PropTypes.number,

} */

export default Product;