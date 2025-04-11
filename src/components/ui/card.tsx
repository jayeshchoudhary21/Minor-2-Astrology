import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white dark:bg-gray-900 rounded-2xl shadow-md p-4 border border-gray-200 dark:border-gray-700",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";

export { Card };
