import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

// Mock data

const specialtyData = [
  { name: 'Plumbing', value: 12 },
  { name: 'Electrical', value: 8 },
  { name: 'Masonry', value: 6 },
  { name: 'Carpentry', value: 4 },
  { name: 'Painting', value: 3 },
];

const experienceData = [
  { range: '0-2 yrs', count: 10 },
  { range: '3-5 yrs', count: 9 },
  { range: '6+ yrs', count: 14 },
];

const monthlySavesData = [
  { month: 'Jan', saves: 5 },
  { month: 'Feb', saves: 8 },
  { month: 'Mar', saves: 6 },
  { month: 'Apr', saves: 12 },
  { month: 'May', saves: 9 },
];

const Charts = () => (
  <div className="charts-container">
    <h3>Builder Specialties Distribution</h3>
    <PieChart width={300} height={250}>
      <Pie
        data={specialtyData}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {specialtyData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>

    <h3>Builders Experience Distribution</h3>
    <BarChart
      width={400}
      height={250}
      data={experienceData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>

    <h3>Monthly Builder Saves</h3>
    <LineChart
      width={400}
      height={250}
      data={monthlySavesData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="saves" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </div>
);

export default Charts;
