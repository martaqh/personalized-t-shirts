import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
    
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size =>
              <li key={size}>
                <button
                  type="button"
                  className={clsx(styles.choices, props.currentSize === size.name && styles.active)}
                  onClick={() => props.actionSize(size.name)}
                >{size.name}
                </button>
              </li>)}
            </ul>
        </div>
    )
}

export default OptionSize;