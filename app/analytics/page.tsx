"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { supabase } from '@/lib/supabase';
import { useAuth } from "@/lib/supabase/useAuth";

type Log = {
  user_id: string;
  category: string;
  hours: number;
  logged_at: string;
};

const AnalyticsPage = () => {
  const { user, loadingUser } = useAuth();
  const [logs, setLogs] = useState<Log[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogs = async () => {
      if (loadingUser) return;
      if (user) {
        const user_id = user.id;
        try {
          const { data } = await axios.get<Log[]>(`/api/logs?user_id=${user_id}`);
          setLogs(data);
        } catch (error) {
          setError('Failed to load logs');
        }
      } else if (!loadingUser) {
        setError('User not authenticated');
      }
    };

    fetchLogs();
  }, [user, loadingUser]);

  if (!user) {
    return <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black px-4">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Please log in to view analytics.</h1>
        </div>;
  }

  const getColor = (index: number) => {
    const colors = [
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ];
    return colors[index % colors.length];
  };

  const processData = () => {
    const categories = Array.from(new Set(logs.map(log => log.category)));
    const labels = Array.from(new Set(logs.map(log => new Date(log.logged_at).toLocaleDateString()))).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    const datasets = categories.map((category, index) => {
      const categoryLogs = logs.filter(log => log.category === category);
      const data = labels.map(label => {
        const dailyLogs = categoryLogs.filter(log => new Date(log.logged_at).toLocaleDateString() === label);
        return dailyLogs.reduce((sum, log) => sum + log.hours, 0);
      });

      return {
        label: category,
        data,
        fill: false,
        backgroundColor: getColor(index),
        borderColor: getColor(index),
        borderWidth: 2,
      };
    });

    return {
      labels,
      datasets,
    };
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: '#2bfccf',
        },
      },
      y: {
        ticks: {
          color: '#2bfccf',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#2bfccf',
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black px-4">
      <h1 className="text-3xl font-bold mb-4 text-appGreen">Analytics</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="w-full max-w-4xl">
        <Line data={processData()} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsPage;


