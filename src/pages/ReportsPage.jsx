import React from 'react';
import { Download, Calendar, TrendingUp, CheckCircle, FileText, Clock } from 'lucide-react';
import RevenueByMonthChart from '../components/reports/RevenueByMonthChart';
import RevenueByClientChart from '../components/reports/RevenueByClientChart';
import ProjectStatusChart from '../components/reports/ProjectStatusChart';
import TaskCompletionChart from '../components/reports/TaskCompletionChart';
import InvoiceAgingTable from '../components/reports/InvoiceAgingTable';

export default function ReportsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports</h1>
          <p className="text-slate-600 mt-1">Gain insights into your business performance with clear, actionable data.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Sep 1, 2026 — Sep 28, 2026</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-md text-indigo-600">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-700">Total Revenue</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">$21,500</div>
          <div className="flex items-center text-sm text-green-600 bg-green-50 w-max px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>+24% vs previous period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-md text-indigo-600">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-700">Projects Completed</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">8</div>
          <div className="flex items-center text-sm text-green-600 bg-green-50 w-max px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>+2 vs previous period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-md text-indigo-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-700">Avg Project Value</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">$2,687</div>
          <div className="flex items-center text-sm text-green-600 bg-green-50 w-max px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>+$340 vs previous period</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-md text-indigo-600">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-slate-700">Collection Rate</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">80%</div>
          <div className="flex items-center text-sm text-slate-600 bg-slate-100 w-max px-2 py-1 rounded">
            <span>Avg. 12 days to payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <div className="lg:col-span-3">
          <RevenueByMonthChart />
        </div>
        <div className="lg:col-span-2">
          <RevenueByClientChart />
        </div>
      </div>

      <div className="mb-6">
        <ProjectStatusChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskCompletionChart />
        <InvoiceAgingTable />
      </div>
    </div>
  );
}
