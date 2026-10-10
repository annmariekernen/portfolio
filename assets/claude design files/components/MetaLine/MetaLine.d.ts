import * as React from 'react';

export interface MetaLineProps {
  children?: React.ReactNode;
  /** muted on paper, ink for emphasis, inverse on --bg-inverse. */
  tone?: 'muted' | 'ink' | 'inverse';
}

/** Small-caps metadata strip: dates, read times, section markers. */
export function MetaLine(props: MetaLineProps): JSX.Element;
