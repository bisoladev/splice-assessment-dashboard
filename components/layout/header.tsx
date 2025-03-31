"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Breadcrumbs from "../breadcrumb";
import { ThemeSwitch } from "../theme-switch";
import { ProfileDropdown } from "../profile-dropdown";

interface BreadCrumbProp {
  label: string;
  to: string;
}

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
  items: BreadCrumbProp[];
}

export const Header = ({ className, fixed, items, ...props }: HeaderProps) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };

    // Add scroll listener to the body
    document.addEventListener("scroll", onScroll, { passive: true });

    // Clean up the event listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "flex items-center gap-3 sm:gap-4 bg-background p-4 h-16",
        fixed && "header-fixed peer/header w-[inherit] fixed z-50 rounded-md",
        offset > 10 && fixed ? "shadow" : "shadow-none",
        className
      )}
      {...props}
    >
      <SidebarTrigger variant="outline" className="scale-125 sm:scale-100" />
      <Separator orientation="vertical" className="h-6" />
      <div>
        <Breadcrumbs items={items} />
      </div>
      <div className="ml-auto flex items-center space-x-4 fixed right-4">
        <ThemeSwitch />
        <ProfileDropdown />
      </div>
    </header>
  );
};

Header.displayName = "Header";
