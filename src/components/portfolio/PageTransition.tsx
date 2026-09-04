import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Wraps route content in a spell-like fade/lift whenever the path changes. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={pathname}>
      <span aria-hidden="true" className="page-veil" />
      <div className="page-enter">{children}</div>
    </div>
  );
}
