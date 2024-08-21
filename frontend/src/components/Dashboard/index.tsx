import { LineChartComponent } from "../LineChart";
import { List, ListItem } from "../List";
import styles from './Dashboard.module.scss'

export function Dashboard(){
    return <div className={styles.dashboard}> 
        <main>
            <h2>Dashboard</h2>

            <section className={styles.dashboard__row}>
                <List data={tasksList}/>
                <LineChartComponent title="Tasks" data={taskData} dataKey="tasks"/>
            </section>
            
            <section className={styles.dashboard__row}>
                <LineChartComponent title="Projetos" data={ProjectsData} dataKey="projects"/>
                <List data={projectsList}/>
            </section>
        </main>
    </div>
}


const taskData = [
    { month: 'Jan', tasks: 30 },
    { month: 'Fev', tasks: 20 },
    { month: 'Mar', tasks: 50 },
    { month: 'Abr', tasks: 75 },
    { month: 'Mai', tasks: 60 },
    { month: 'Jun', tasks: 90 },
    { month: 'Jul', tasks: 70 },
    { month: 'Ago', tasks: 50 },
    { month: 'Set', tasks: 80 },
    { month: 'Out', tasks: 100 },
    { month: 'Nov', tasks: 60 },
    { month: 'Dez', tasks: 40 },
  ];

  const ProjectsData = [
    { month: 'Jan', projects: 0 },
    { month: 'Fev', projects: 2 },
    { month: 'Mar', projects: 1 },
    { month: 'Abr', projects: 3 },
    { month: 'Mai', projects: 0 },
    { month: 'Jun', projects: 2 },
    { month: 'Jul', projects: 0 },
    { month: 'Ago', projects: 3 },
    { month: 'Set', projects: 0 },
    { month: 'Out', projects: 0 },
    { month: 'Nov', projects: 1 },
    { month: 'Dez', projects: 1 },
  ];
  

  const projectsList: ListItem[] = [
    { title: 'Projeto A', tag: { name: '3', type: 'default' } },
    { title: 'Projeto B', tag: { name: '5', type: 'default' } },
    { title: 'Projeto C', tag: { name: '1', type: 'default' } },
    { title: 'Projeto D', tag: { name: '4', type: 'default' } },
    { title: 'Projeto E', tag: { name: '2', type: 'default' } },
  ];


  const tasksList: ListItem[] = [
    { title: 'Desenvolver Backend', tag: { name: 'Urgente', type: 'urgent' } },
    { title: 'Criar Layout Frontend', tag: { name: 'Médio', type: 'medium' } },
    { title: 'Configurar Banco de Dados', tag: { name: 'Médio', type: 'medium' } },
    { title: 'Testar Funcionalidades', tag: { name: 'Baixo', type: 'low' } },
    { title: 'Revisar Código', tag: { name: 'Urgente', type: 'urgent' } },
    { title: 'Documentar API', tag: { name: 'Médio', type: 'medium' } },
    { title: 'Atualizar Dependências', tag: { name: 'Baixo', type: 'low' } },
    { title: 'Ajustar Estilos', tag: { name: 'Baixo', type: 'low' } },
  ];