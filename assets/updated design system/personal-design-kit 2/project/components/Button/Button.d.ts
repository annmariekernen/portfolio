import * as React from 'react';

export interface ButtonProps {
  /** Write labels in sentence case — the font renders small caps. */
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'ink';
  as?: 'button' | 'a';
  href?: string;
  disabled?: boolean;
  /** Set on --bg-inverse surfaces: recolors the ghost variant and darkens its hover. */
  onInk?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

/** Small-caps action in the body face. 1px border, 4px radius, no shadow. */
export function Button(props: ButtonProps): JSX.Element;
