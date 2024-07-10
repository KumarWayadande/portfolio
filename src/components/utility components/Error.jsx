import RootLayout from "../pages/RootLayout";

const Error = () => {
  const content = (
    <div className="text-stone-50">
      <h1>Error Occured ....</h1>
      <p>Try again later ....</p>
    </div>
  );

  return (
    <div>
      <RootLayout>
        {content}
      </RootLayout>
    </div>
  );
};

export default Error;
