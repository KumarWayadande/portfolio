import formatGeneralDate from "../utility components/formatted-date";

export default function Timestamp(prop) {
  return (
    <p className="text-gray-500 px-7 md:p-7 md:px-0 my-3 w-[90%]">
      {formatGeneralDate(prop.timeStamp)}
    </p>
  );
}
