export default function SpeakingContentContainer(prop) {
  return (
    <div className="flex flex-col">
      <div className="second-col hover:bg-gray-50 p-7 rounded-xl dark:hover:bg-[#252529]">
        {prop.children}
      </div>
    </div>
  );
}
