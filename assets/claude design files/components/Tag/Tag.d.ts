import * as React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  /** Filled variants use the deep colour steps so small text clears AA. */
  variant?: 'default' | 'blue' | 'green' | 'bluePale' | 'greenPale' | 'mist' | 'rust' | 'ink';
  /** Leading round status dot in the current text colour. */
  dot?: boolean;
}

/** Small-caps pill chip (fully rounded — overrides the zero-radius rule). Sentence-case children; the font renders the caps. */
export function Tag(props: TagProps): JSX.Element;
