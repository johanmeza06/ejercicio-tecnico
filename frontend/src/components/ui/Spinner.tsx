const Spinner = () => {
  return (
    <div className="flex justify-center items-center gap-2 w-fit mx-auto">
      <div
        className="inline-block rounded-full bg-gray-400 w-2 h-2 animate-bounce-custom"
        style={{ animationDelay: "-0.32s" }}
      ></div>
      <div
        className="inline-block rounded-full bg-gray-400 w-2 h-2 animate-bounce-custom"
        style={{ animationDelay: "-0.16s" }}
      ></div>
      <div className="inline-block rounded-full bg-gray-400 w-2 h-2 animate-bounce-custom"></div>
    </div>
  );
};
export default Spinner;
