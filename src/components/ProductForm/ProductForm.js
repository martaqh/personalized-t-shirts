import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

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
          <OptionColor
            colors={props.colors}
            actionColor={props.actionColor}
            currentColor={props.currentColor}
          >
          </OptionColor>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )

}

export default ProductForm;