import React from "react";
import NextLink from "next/link";
import { LinkProps } from "@/types/link";
import { cn } from "@/utiles/utils";

const CustomLink: React.FC<LinkProps> = ({
  href,
  children,
  variant = "text",
  size = "md",
  color = "primary",
  className = "",
  external = false,
  icon,
}) => {
  // Base classes
  const baseClasses =
    "transition-all duration-300 inline-flex items-center gap-2";

  // Size classes
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  // Variant classes
  const variantClasses = {
    text: "hover:opacity-80",
    button:
      "inline-flex items-center justify-center px-2 py-1.5 font-medium rounded-full transition-all  duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform cursor-pointer hover:scale-105 active:scale-95",
    icon: "p-2 rounded-full",
  };

  // Color classes
  const colorClasses = {
    primary: {
      text: "text-brand-cyan hover:text-cyan-400",
      button: "bg-brand-cyan text-zinc-950 border-blue-600 hover:bg-cyan-400",
      icon: "bg-brand-cyan text-zinc-950 hover:bg-cyan-400",
    },
    secondary: {
      text: "text-gray-600 hover:text-gray-700",
      button: "bg-gray-600 text-white border-gray-600 hover:bg-gray-700",
      icon: "bg-gray-600 text-white hover:bg-gray-700",
    },
    accent: {
      text: "text-green-400 hover:text-green-300",
      button: cn(
        "bg-green-400/10 text-green-400 border-green-400/50",
        "hover:bg-green-400/20 hover:border-green-400"
      ),
      icon: "bg-green-400/10 text-green-400 hover:bg-green-400/20",
    },
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    colorClasses[color][variant],
    className
  );

  // Content with optional icon
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink href={href} className={combinedClasses}>
      {content}
    </NextLink>
  );
};

export default CustomLink;
