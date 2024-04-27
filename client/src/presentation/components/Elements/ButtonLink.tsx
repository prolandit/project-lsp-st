import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

const ButtonLink: React.FC<Props> = ({ children, className, to }) => {
  return (
    <Link
      to={to}
      className={twMerge(
        "bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
