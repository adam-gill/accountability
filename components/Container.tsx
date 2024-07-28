import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full py-4">
      <div className="w-full max-w-5xl px-4 mx-auto">{children}</div>
    </div>
  );
};

export default Container;
