import styles from './List.module.scss'

type TagType = "default" | "urgent" | "medium" | 'low'

export interface ListItem {
    title: string
    tag: {
        name: string
        type: TagType
    }
}

interface Props {
    data: ListItem[]
}

const styleTag = {
    urgent: styles['list__tag--urgent'],
    medium: styles['list__tag--medium'],
    low: styles['list__tag--low']
}

export function List({ data }: Props) {
    return <div className={styles.list}>
        <ul>
            {data.map((item, index) => <li key={`${index}-${item.title}`}>
                {item.title} 
                <span className={`${styles.list__tag} ${item.tag.type != 'default' ? styleTag[item.tag.type] : ''}`}>{item.tag.name}</span>
            </li>
            )}
        </ul>
        <a>Ver Todos</a>
    </div>
}