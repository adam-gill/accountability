'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Leaderboard/Table';
import TopCard from '@/components/Leaderboard/TopCard';
import { useAuth } from "@/lib/supabase/useAuth";

type LeaderboardEntry = {
  user_id: string;
  total_hours: number;
};

export default function LeaderboardPage() {
  const { user, loadingUser } = useAuth()
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      if (user) {
        try {
            const { data } = await axios.get<LeaderboardEntry[]>('/api/leaderboard');
            setLeaderboard(data);
          } catch (error) {
            setError('Failed to load leaderboard');
          }
        } else if (!loadingUser) {
            setError('User not authenticated');
        }

    };

    fetchLeaderboard();
  }, [user, loadingUser]);

  if (loadingUser) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black px-4">
        <h1 className="text-3xl font-bold mb-4 text-red-500">Please log in to view the leaderboard.</h1>
        </div>;
  }

  const top3 = leaderboard.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black px-4">
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
