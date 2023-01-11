import logo from './../assets/img/zabbix.svg'
import styles from './Header.module.scss'

const Header = () => {
    return( 
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="" height='35'/>
            </div>

            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    <li><a href='/'>Product</a></li>
                    <li><a href='/'>Shop</a></li>
                    <li><a href='/'>More</a></li>
                </ul>
            </div>
            <div className={styles.buttons}>
                <button className={styles['login-button']}>Login</button>
                <button className={styles['sing-button']}>Sign up</button>
            </div>
        </div> 
    );
}
 
export default Header;