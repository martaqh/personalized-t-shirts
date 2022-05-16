import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import productsData from '../../data/products';
//import PropTypes from 'prop-types';

const Product = props => {
  console.log(props.currentSize);
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.colors[0]}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li><button type="button" className={clsx(styles.choices, props.size === size.name && styles.active)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li><button type="button" className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], color === props.color && styles.active)} /></li>)}
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