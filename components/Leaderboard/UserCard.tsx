// import Image from "next/image";
import { TableDataType } from "../../types";

const UserCard = ({ data, index }: { data: TableDataType; index: number }) => {

  return (
    <tr>
      {/* <td className="p-5 border-b border-gray-200 bg-darkwhite lg:hidden">
        <p className="font-mainfont text-lg font-medium text-darkgrey text-center">
          {index + 4}
        </p>
      </td> */}
      <td className="border-b border-gray-200 bg-darkwhite">
        <p className="items-center font-codefont text-xl font-semibold text-primarydark text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
          # {data.rank}
        </p>
      </td>
      <td className="p-5 border-b border-gray-200 bg-darkwhite w-1/2 lg:px-3 lg:py-4">
        <div className="flex items-center">
          <div>
            <p className="font-codefont text-xl font-medium text-lightblack tracking-wide capitalize lg:text-lg md:text-base">
              {data.user_name || (
                <span className="text-lightgrey">Name not found...</span>
              )}
            </p>
          </div>
        </div>
      </td>
      <td className="p-5 border-b border-gray-200 bg-darkwhite text-center lg:px-3 lg:py-4 xs:hidden">
        <span className="font-codefont text-xl font-medium text-lightblack lg:text-base">
          {data.total_points}
        </span>
      </td>
    </tr>
  );
};

export default UserCard;