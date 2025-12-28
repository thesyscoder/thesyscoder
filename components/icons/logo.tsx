import { FC, SVGProps } from "react";

export const Logo: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="4" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="4" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.8" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="20" width="8" height="8" rx="2" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M8 12V24H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <path d="M24 12V24H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
};
