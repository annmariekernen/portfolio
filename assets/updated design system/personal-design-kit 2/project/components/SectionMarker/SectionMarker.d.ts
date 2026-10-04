import * as React from 'react';

export interface SectionMarkerProps {
  /** Bracketed index, e.g. "[01]". Set in mono beside the heading. */
  num?: string;
  children?: React.ReactNode;
}

/** Numbered section heading over a structural rule. Sentence case. */
export function SectionMarker(props: SectionMarkerProps): JSX.Element;
