export default function CustomTextArea(prop) {
  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {prop.label}
      </label>
      <textarea
        onChange={prop.onChangeHandler}
        id="message"
        rows="4"
        value={prop.value}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:dark:bg-[#262626] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write article description of upto 3 lines..."
      ></textarea>
    </div>
  );
}
