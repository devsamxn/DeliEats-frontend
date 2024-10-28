import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="md:text-xl font-bold flex flex-col md:flex-row gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} restaurants found in {city}
      </span>
      <Link
        to="/"
        className="ml-1 md:text-[15px] font-semibold underline cursor-pointer text-blue-500 "
      >
        change location
      </Link>
    </div>
  );
};

export default SearchResultInfo;
