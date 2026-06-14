const Heading = ({ headingText }) => {
  return (
    <div
      data-reveal
      className="flex items-center gap-3 text-[#c60678] text-xs font-semibold tracking-widest uppercase"
    >
      <span className="block w-6 h-px bg-[#c60678]" />
      {headingText}
    </div>
  );
};

export default Heading;
