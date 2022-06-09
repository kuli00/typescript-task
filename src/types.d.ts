export type Gender = "Male" | "Female";
export type Size = "small" | "medium" | "large";
export type Email = string | null;
export type PhoneNumber = number | null;
export type Text = string;
export type Direction = "shrink" | "grow";

export interface PropsSingleData {
  first_name: string;
  last_name: string;
  gender: string;
  image: URL;
  occupation: string;
  about: string;
  card_size: Size;
  contact: string;
}

export interface SingleData {
  name: string;
  pictureSource: URL;
  occupation: string;
  gender: Gender;
  about: Text;
  size: Size;
  onButtonClick(direction: Direction, component): void;
  email?: Email;
  phone?: PhoneNumber;
}

export type PropsData = PropsSingleData[];
export type Data = SingleData[];
