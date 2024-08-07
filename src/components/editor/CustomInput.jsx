export default function CustomInput(prop) {
  return (
    <div>
      <label
        htmlFor="small-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {prop.label}
      </label>
      <input
        onChange={prop.onChangeHandler}
        type="text"
        value={prop.value}
        id="small-input"
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:dark:bg-[#262626] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="title"
      />
    </div>
  );
}
