'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Leaderboard/Table';

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <h1 className="text-2xl font-bold mb-4 text-appGreen">Leaderboard</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Table data={leaderboard} />
    </div>
  );
}
