"use client";

import Link from "next/link";
import { forwardRef, AnchorHTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname ? (pathname === href || (href !== "/" && pathname.startsWith(href))) : false;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
