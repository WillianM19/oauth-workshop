import Image from 'next/image'
import styles from './Login.module.scss'
import Logo from '/public/assets/logo.svg'
import { Email, GitHub } from '@mui/icons-material'
import { useRouter } from 'next/router'

export function Login() {
    const router = useRouter()

    return <div className={styles.login}>
        <div className={styles.login__main}>
            <h1 className={styles.login__main__logo}>
                <Image src={Logo} alt='logo' fill />
            </h1>
            <p className={styles.login__main__title}>Seja bem-vindo.</p>


            <button className={styles.login__main__button}>
                <Email sx={{fontSize: 20, lineHeight: 20}} />
                Gmail
            </button>

            <button className={styles.login__main__button} onClick={() => window.open("http://localhost:3001/auth/github") }>
                <GitHub sx={{fontSize: 20, lineHeight: 20}} />
                Github
            </button>
        </div>
    </div>
}