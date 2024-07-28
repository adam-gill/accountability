
type UserCardProps = {
    user_id: string;
    total_hours: number;
    index: number;
  };
  

const UserCard: React.FC<UserCardProps> = ({ user_id, total_hours, index }) => {

  return (
    <tr>
      <td className="border-b border-gray-200 bg-lightblack">
        <p className="items-center font-codefont text-xl font-semibold text-appGreen text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
          # {index}
        </p>
      </td>
      <td className="p-5 border-b border-gray-200 bg-lightblack w-1/2 lg:px-3 lg:py-4">
        <div className="flex items-center">
          <div>
            <p className="font-codefont text-xl font-medium text-darkwhite tracking-wide capitalize lg:text-lg md:text-base">
              {user_id || (
                <span className="text-darkwhite">Name not found...</span>
              )}
            </p>
          </div>
        </div>
      </td>
      <td className="p-5 border-b border-gray-200 bg-lightblack text-center lg:px-3 lg:py-4 xs:hidden">
        <span className="font-codefont text-xl font-medium text-darkwhite lg:text-base">
          {total_hours}
        </span>
      </td>
    </tr>
  );
};

export default UserCard;