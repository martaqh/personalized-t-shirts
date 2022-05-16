import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import productsData from '../../data/products';
//import PropTypes from 'prop-types';

const Product = props => {
  console.log(props);
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props[0].name}--${props[0].color}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props[0].title}</h2>
          <span className={styles.price}>{props[0].basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li>
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li>
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