import { Link, useRouteError } from "react-router-dom";
const Error = () => {

  const error = useRouteError();

  let errorMessage =
    "Sorry, we can't find that page. You'll find lots to explore on the home page";
  let errorStatus = 500;
  let errorTitle = "Something's missing.";

  if(error.message){
    errorMessage = error.message;
  }

  if(error.status === 404){
    errorStatus = 404;
    errorTitle = "Resource not found!!!";
  }

  return (
    <div className="error-container flex flex-col items-center gap-6 my-20">
      <h1 className="text-[#14b8a6] text-9xl font-bold">{errorStatus}</h1>
      <h2 className="text-stone-950 font-bold text-4xl dark:text-white">
        {errorTitle}
      </h2>
      <span className="text-stone-500 font-thin text-xl text-center">
        {errorMessage}
      </span>
      <Link
        to="/"
        className="bg-[#14b8a6] font-normal hover:bg-[#119787] text-white py-2 px-3 rounded-md"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default Error;
