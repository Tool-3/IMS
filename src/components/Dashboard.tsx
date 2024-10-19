import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, Clock, AlertCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const invoiceData = [
    { month: 'Jan', paid: 4000, pending: 2400, overdue: 1000 },
    { month: 'Feb', paid: 3000, pending: 1398, overdue: 800 },
    { month: 'Mar', paid: 2000, pending: 9800, overdue: 1200 },
    { month: 'Apr', paid: 2780, pending: 3908, overdue: 500 },
    { month: 'May', paid: 1890, pending: 4800, overdue: 300 },
    { month: 'Jun', paid: 2390, pending: 3800, overdue: 700 },
  ];

  const stats = [
    { title: 'Total Revenue', value: '$24,560', icon: DollarSign, color: 'bg-green-100 text-green-800' },
    { title: 'Pending Invoices', value: '18', icon: Clock, color: 'bg-yellow-100 text-yellow-800' },
    { title: 'Overdue Invoices', value: '5', icon: AlertCircle, color: 'bg-red-100 text-red-800' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-lg shadow ${stat.color}`}>
            <div className="flex items-center">
              <stat.icon className="h-8 w-8 mr-3" />
              <div>
                <p className="text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Invoice Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={invoiceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="paid" fill="#4CAF50" />
            <Bar dataKey="pending" fill="#FFC107" />
            <Bar dataKey="overdue" fill="#F44336" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;