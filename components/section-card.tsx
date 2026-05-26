import { ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

export function SectionCard({ children, className = "" }: SectionCardProps) {
  return <div className={`glass-panel card-hover rounded-[2rem] p-6 ${className}`}>{children}</div>;
}
