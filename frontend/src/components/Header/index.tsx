import Image from 'next/image'
import styles from './Header.module.scss'

import Logo from "/public/assets/logo.svg"
import { UserNavbar } from '../UserNavbar'

export function Header() {
    return <header className={styles.header}>
        <div className={styles.header__main}>
            <h1 className={styles.header__main__logo}>
                <Image src={Logo} alt='Logo' fill />
            </h1>

            <nav className={styles.header__main__nav}>
                <ul className={styles.header__main__list}>
                    <li className={styles.selected}>Início</li>
                    <li>Projetos</li>
                    <li>Tasks</li>
                </ul>

                <UserNavbar />
            </nav>
        </div>
    </header>
}