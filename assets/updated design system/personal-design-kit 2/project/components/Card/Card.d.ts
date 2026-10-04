import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  fill?: 'bone' | 'paper' | 'quiet' | 'bluePale' | 'greenPale' | 'ink';
  /** Offset hairline outline. MUST match the surface behind the card, or set 'none'. */
  ghost?: 'paper' | 'alt' | 'bright' | 'none';
  /** Hero cards get 32px padding instead of 24px. */
  hero?: boolean;
  style?: React.CSSProperties;
}

/** Flat panel: hairline border, offset ghost outline, zero radius. */
export function Card(props: CardProps): JSX.Element;
