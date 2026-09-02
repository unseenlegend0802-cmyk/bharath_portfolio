import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Wraps route content in a spell-like fade/lift whenever the path changes. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={pathname} className="page-enter">
      <span aria-hidden="true" className="page-veil" />
      {children}
    </div>
  );
}
