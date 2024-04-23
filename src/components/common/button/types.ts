export type ButtonKind = 'outlined' | 'contained' | '' ;

export interface ButtonTypes {
  text: string,
  onClick?: () => {},
  type?: ButtonKind,
}