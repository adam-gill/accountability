import React from "react";
import TableHeader from "./TableHeader";
import UserCard from "./UserCard";

type LeaderboardEntry = {
    user_id: string;
    total_hours: number;
  };
  
  type TableProps = {
    data: LeaderboardEntry[];
  };

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="justify-center relative container my-4 px-12 lg:px-8 sm:px-2">
      <div className="shadow-[0_0_2px_rgba(50,69,107,0.4)] rounded-lg overflow-hidden bg-white">
        <table className="w-full table-auto">
          <TableHeader />
          <tbody>
            {data.map((item, i) => (
              <UserCard key={item.user_id} user_id={item.user_id} total_hours={item.total_hours} index={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;