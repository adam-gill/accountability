"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

type Log = {
  user_id: string;
  category: string;
  hours: number;
  logged_at: string;
};

const AnalyticsPage = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const { data } = await axios.get<Log[]>('/api/logs', {
          params: { user_id: 'USER_ID' } // Replace with actual user ID
        });
        setLogs(data);
      } catch (error) {
        setError(error.response?.data?.error || 'Failed to load logs');
      }
    };

    fetchLogs();
  }, []);

  const processData = () => {
    const categories = Array.from(new Set(logs.map(log => log.category)));
    const labels = Array.from(new Set(logs.map(log => new Date(log.logged_at).toLocaleDateString())));

    const datasets = categories.map(category => {
      const categoryLogs = logs.filter(log => log.category === category);
      const data = labels.map(label => {
        const dailyLogs = categoryLogs.filter(log => new Date(log.logged_at).toLocaleDateString() === label);
        return dailyLogs.reduce((sum, log) => sum + log.hours, 0);
      });

      return {
        label: category,
        data,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      };
    });

    return {
      labels,
      datasets,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black px-4">
      <h1 className="text-3xl font-bold mb-4 text-appGreen">Analytics</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="w-full max-w-4xl">
        <Line data={processData()} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
