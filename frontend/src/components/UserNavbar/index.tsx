import { KeyboardArrowDown, AccountCircle, ExitToApp, Person } from '@mui/icons-material';
import styles from './UserNavbar.module.scss'
import { useUserContext } from '@/context/UserContext';

export function UserNavbar() {
    const {user} = useUserContext()

    return <details className={styles['user-navbar']}>
        <summary>
            <AccountCircle sx={{ fontSize: 32, color: '#0f6' }} />
            <strong>{user.username}</strong>
            <KeyboardArrowDown sx={{ fontSize: 18 }} />
        </summary>

        <ul>
            <li>
                <Person sx={{ fontSize: 20 }}/>
                Perfil
            </li>
            <li>
                <ExitToApp sx={{ fontSize: 20}}/> 
                Sair
            </li>
        </ul>

    </details>
}