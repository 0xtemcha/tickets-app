import { LucideMessageSquareWarning, type LucideProps } from "lucide-react";
import type { ComponentProps } from "react";

type PlaceholderProps = {
  label: string;
  renderIcon?: (props: LucideProps) => React.ReactElement;
  renderButton?: (props: ComponentProps<"button">) => React.ReactElement;
};

const Placeholder = ({
  label,
  renderIcon = (props) => <LucideMessageSquareWarning {...props} />,
  renderButton = (props) => <button {...props} />,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-col flex-1 self-center items-center justify-center gap-y-2">
      {renderIcon({ className: "w-16 h-16" })}
      <h2 className="text-lg text-center">{label}</h2>
      {renderButton({ className: "h-9 invisible" })}
    </div>
  );
};

export { Placeholder };
