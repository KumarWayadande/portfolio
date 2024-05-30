const SpeakingInfo = (prop) => {
  return (
    <div className="article-row flex flex-col md:flex-row ">
      <p className="text-gray-500 px-7 md:p-7 md:px-0 my-3 w-[90%]">
        {prop.timeStamp}
      </p>

      <div className="flex flex-col">
        <div className="second-col hover:bg-gray-50 p-7 rounded-xl dark:hover:bg-[#252529]">
        <p className="platform border-l-[2px] px-3 text-sm text-gray-400 border-b-gray-50 dark:border-gray-700">SysConf 2021</p>
          <h2 className="font-semibold my-3 dark:text-gray-200">
            {prop.speakingInfoHeader}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-500 cursor-pointer">
            {prop.speakingInfoContent}
          </p>
          <p className="my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
            {prop.buttonText} &gt;
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default SpeakingInfo;
