import React, { useState } from 'react';
import { format } from 'date-fns';
import { Edit, Trash2, Send } from 'lucide-react';

interface Invoice {
  id: number;
  client: string;
  amount: number;
  dueDate: Date;
  status: 'Paid' | 'Pending' | 'Overdue';
}

const InvoiceList: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: 1, client: 'Acme Corp', amount: 1500, dueDate: new Date(2024, 3, 15), status: 'Pending' },
    { id: 2, client: 'Globex Inc', amount: 2300, dueDate: new Date(2024, 3, 20), status: 'Paid' },
    { id: 3, client: 'Initech', amount: 800, dueDate: new Date(2024, 2, 10), status: 'Overdue' },
  ]);

  const handleReminder = (id: number) => {
    // Implement reminder logic here
    console.log(`Sending reminder for invoice ${id}`);
  };

  const handleEdit = (id: number) => {
    // Implement edit logic here
    console.log(`Editing invoice ${id}`);
  };

  const handleDelete = (id: number) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Invoices</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="px-6 py-4 whitespace-nowrap">{invoice.client}</td>
                <td className="px-6 py-4 whitespace-nowrap">${invoice.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{format(invoice.dueDate, 'MMM dd, yyyy')}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleReminder(invoice.id)} className="text-indigo-600 hover:text-indigo-900 mr-2">
                    <Send className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleEdit(invoice.id)} className="text-blue-600 hover:text-blue-900 mr-2">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDelete(invoice.id)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceList;