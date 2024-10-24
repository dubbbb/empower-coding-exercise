import TextColor from "@/components/TextColor/TextColor";

interface ComponentProps {
  children: string;
  variant?: "dark" | "light" | undefined;
}

const SectionHeading: React.FC<ComponentProps> = ({ children, variant }) => {
  const textColorShade =
    variant == "dark" ? "800" : variant == "light" ? "200" : undefined;
  return (
    <h2 className="text-6xl font-extrabold mb-16">
      <TextColor shade={textColorShade}>{children}</TextColor>
    </h2>
  );
};

export default SectionHeading;
