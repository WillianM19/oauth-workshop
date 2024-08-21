
import styles from './LineChart.module.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, } from 'recharts';



interface Props {
  title: string
  data: Array<any>
  dataKey: string
}
export function LineChartComponent({ data, dataKey, title }: Props) {

  return <div className={styles['line-chart']}>
    <header>
      <p className={styles['line-chart__title']}>{title}</p>
      <p className={styles['line-chart__last-month']}>
        <b>Último mês:</b> {data[data.length - 1][dataKey]}
      </p>
    </header>

    <div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 20, right: 24 }}>
          <defs>
            <linearGradient id={`color${title}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3aff89" stopOpacity={0.7} />
              <stop offset="92%" stopColor="#22fd7a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="2 2" stroke="#212121" />
          <XAxis dataKey="month" stroke="#9a9a9a" />
          <YAxis stroke="#9a9a9a" />
          <Tooltip contentStyle={{ backgroundColor: '#131313', color: '#fff', borderColor: '#2e2e2e' }} />

          <Area type="monotone" dataKey={dataKey} stroke="#0f6" fillOpacity={1} fill={`url(#color${title})`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
}


