import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import shortid from 'shortid';

//import PropTypes from 'prop-types';

const Product = props => {
  
  const getPrice = () =>{
    let chosenSizeData = props.sizes.find(elem => elem.name === props.size);
    let addPrice = chosenSizeData.additionalPrice;
    return props.basePrice + addPrice;
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size =>
              <li key={shortid}>
                <button
                  type="button"
                  className={clsx(styles.choices, props.size === size.name && styles.active)}
                  onClick={() => props.actionSize(size.name)} key={shortid}
                >{size.name}
                </button>
              </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
              <li key={shortid}>
                <button
                  type="button"
                  className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], color === props.color && styles.active)}
                  onClick={() => props.actionColor(color)} key={shortid}
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