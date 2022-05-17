import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
    return (
    <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
        {props.colors.map(color =>
        <li key={color}>
            <button
            type="button"
            className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], color === props.currentColor && styles.active)}
            onClick={() => props.actionColor(color)}
            >
            </button>
            </li>)}
        </ul>
    </div>
    )    
}

export default OptionColor;