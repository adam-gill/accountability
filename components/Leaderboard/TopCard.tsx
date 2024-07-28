// // import Image from "next/image";
// import { TableDataType } from "../../types";

// const TopCard = ({ userData }: { userData: TableDataType }) => {

//   return (
//     <div className="relative m-auto p-2 w-full flex justify-center align-center flex-col bg-lightblack shadow-[0_0_4px_rgba(50,69,107,0.2)] rounded-[6px] z-[1] overflow-hidden">

//       <div className="m-auto w-full flex justify-center align-center flex-col bg-lightblack rounded-[6px]">
//         <h2 className="mt-2.5 mb-0 mx-auto text-4xl font-medium font-codefont text-appGreen text-center tracking-[0.8px]">
//           {userData.total_hours}
//         </h2>
//         <p className="-mt-[2px] mb-2.5 mx-auto text-lg font-medium font-mainfont text-darkwhite text-center tracking-[0.8px]">
//           Hours
//         </p>
//         <span className="-mt-[2px] mb-2.5 mx-auto px-5 py-1 text-xl font-medium font-codefont text-lightblack bg-appGreen text-center tracking-[0.2px] rounded-[4px]">
//           Rank: {userData.rank}
//         </span>
//       </div>

//       <div className="flex flex-col items-center mt-4">
//         <h1 className="my-2 mx-auto text-2xl font-medium font-codefont text-darkwhite text-center tracking-[0.2px]">
//           {(userData.user_name)}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default TopCard;