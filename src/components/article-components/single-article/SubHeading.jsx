// Component to display a subheading and a line below it
export default function SubHeading(prop) {
  return (
    <>
      <h1 className="font-medium md:text-3xl mt-10 mb-3 text-2xl dark:text-gray-100">
        {prop.children}
      </h1>
      <hr className="border-slate-200 dark:border-[#35353b]" />
    </>
  );
}
