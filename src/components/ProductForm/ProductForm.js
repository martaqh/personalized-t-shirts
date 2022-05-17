import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
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
          <OptionSize 
            sizes={props.sizes}
            actionSize={props.actionSize}
            currentSize={props.currentSize}
          ></OptionSize>
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