'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Leaderboard/Table';
import TopCard from '@/components/Leaderboard/TopCard';

type LeaderboardEntry = {
  user_id: string;
  total_hours: number;
};

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const { data } = await axios.get<LeaderboardEntry[]>('/api/leaderboard');
        setLeaderboard(data);
      } catch (error) {
        setError('Failed to load leaderboard');
      }
    };

    fetchLeaderboard();
  }, []);

  const top3 = leaderboard.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <h1 className="text-3xl font-bold mb-4 text-appGreen">Leaderboard</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex space-x-4 w-full justify-center">
        {top3.map((entry, index) => (
          <TopCard key={entry.user_id} user_id={entry.user_id} total_hours={entry.total_hours} index={index + 1} />
        ))}
      </div>
      <Table data={leaderboard} />
    </div>
  );
}
