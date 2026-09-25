import type { CSSProperties } from "react";

export type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * The 12-column grid resolves its span from CSS custom properties, so a column
 * needs no generated per-breakpoint class. Each breakpoint falls back to the
 * next smallest value via a `var()` chain in `grid.css`.
 */
export interface GridColumnStyle extends CSSProperties {
  "--col-xs"?: ColumnSpan;
  "--col-sm"?: ColumnSpan;
  "--col-md"?: ColumnSpan;
  "--col-lg"?: ColumnSpan;
}
