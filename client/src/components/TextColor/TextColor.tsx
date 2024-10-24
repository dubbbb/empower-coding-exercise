interface ComponentProps {
  children: string;
  shade?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "950"
    | undefined;
}

const TextColor: React.FC<ComponentProps> = ({ children, shade }) => {
  const textColorClass = shade ? `text-sky-${shade}` : "text-white";
  return <span className={textColorClass}>{children}</span>;
};

export default TextColor;
