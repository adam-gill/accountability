import Table from '@/components/Leaderboard/Table'
import React from 'react'
import data from "../../data.json";

const Leaderboard = () => {
  return (
    <div>
        <h1 className="text-4xl text-center mt-8">Current Leaderboard</h1>
        <Table data={data.data} />
    </div>
  )
}

export default Leaderboard