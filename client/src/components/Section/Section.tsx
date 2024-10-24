interface ComponentProps {
  children: React.ReactElement;
  variant?: "dark" | "light" | undefined;
}

const Section: React.FC<ComponentProps> = ({ children, variant }) => {
  const bgColorClass =
    variant == "dark"
      ? "bg-sky-800"
      : variant == "light"
      ? "bg-sky-200"
      : "bg-white";
  return (
    <div className={bgColorClass}>
      <div className="max-w-7xl mx-auto px-4 py-40">{children}</div>
    </div>
  );
};

export default Section;
