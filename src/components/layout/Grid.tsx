import type { ReactNode } from "react";

import type { ColumnSpan, GridColumnStyle } from "@/types/grid";

export interface RowProps {
  readonly children: ReactNode;
  /** Adds a 24px gutter between columns. */
  readonly gap?: boolean;
  /** Aligns columns to the top instead of centring them. */
  readonly alignStart?: boolean;
  readonly className?: string;
}

export function Row({
  children,
  gap = false,
  alignStart = false,
  className,
}: RowProps) {
  const classNames = ["j2cRow"];

  if (gap) {
    classNames.push("j2cRow--gap");
  }

  if (alignStart) {
    classNames.push("j2cRow--alignStart");
  }

  if (className) {
    classNames.push(className);
  }

  return <div className={classNames.join(" ")}>{children}</div>;
}

export interface ColProps {
  readonly children: ReactNode;
  readonly xs?: ColumnSpan;
  readonly sm?: ColumnSpan;
  readonly md?: ColumnSpan;
  readonly lg?: ColumnSpan;
  /** Removes the column below 960px. Used for decorative imagery. */
  readonly hideBelowMd?: boolean;
  readonly className?: string;
}

export function Col({
  children,
  xs = 12,
  sm,
  md,
  lg,
  hideBelowMd = false,
  className,
}: ColProps) {
  const style: GridColumnStyle = {
    "--col-xs": xs,
    "--col-sm": sm,
    "--col-md": md,
    "--col-lg": lg,
  };

  const classNames = ["j2cCol"];

  if (hideBelowMd) {
    classNames.push("j2cCol--hideBelowMd");
  }

  if (className) {
    classNames.push(className);
  }

  return (
    <div className={classNames.join(" ")} style={style}>
      {children}
    </div>
  );
}
