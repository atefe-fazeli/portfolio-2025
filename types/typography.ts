import { BaseComponentProps } from "./baseTypes";

export type TitleVariant = 'h1' | 'h2' | 'h3' | 'h4';
export type TextAlign = 'left' | 'center' | 'right';

export interface TitleProps extends BaseComponentProps {
  variant?: TitleVariant;
  align?: TextAlign;
}

export interface SubtitleProps extends BaseComponentProps {
  align?: TextAlign;
}

export interface TextProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg';
  align?: TextAlign;
  muted?: boolean;
}