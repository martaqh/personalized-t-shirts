import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';
import shortid from 'shortid';

const ProductForm = props => {

    const resumeProduct = e => {
        e.preventDefault();
        console.log('Name: ' + props.name)
        console.log('Price: ' + props.getPrice());
        console.log('Size: ' + props.currentSize);
        console.log('Color: ' + props.currentColor);
      }
    return (
        <form onSubmit={e=>resumeProduct(e)}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size =>
              <li key={size}>
                <button
                  type="button"
                  className={clsx(styles.choices, props.currentSize === size.name && styles.active)}
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
              <li key={color}>
                <button
                  type="button"
                  className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], color === props.currentColor && styles.active)}
                  onClick={() => props.actionColor(color)} key={shortid()}
                  >
                </button>
                </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )

}

export default ProductForm;