"use client"
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import Styles from './chart.module.css'

const data = [
  {
    name: "Mon",
    visit: "100",
    click: "10",
  },
  {
    name: "Tue",
    visit: "300",
    click: "103",
  },
  {
    name: "Wed",
    visit: "400",
    click: "654",
  },
  {
    name: "Thu",
    visit: "5346",
    click: "644",
  },
  {
    name: "Fri",
    visit: "9867",
    click: "545",
  },
  {
    name: "Sat",
    visit: "5678",
    click: "645",
  },
  {
    name: "sun",
    visit: "4526",
    click: "1398",
  },
]

const Chart = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={100}
          height={50}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "inherit", border: "none"}} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart