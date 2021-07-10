import styles from './index.module.css'

const Button = ({size, children}) => {
    return( <button className={styles.base}>
        {children}
    </button>)
}

export default Button;