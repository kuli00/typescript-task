import {
  Data,
  SingleData,
  PropsData,
  PropsSingleData,
  Gender,
  Size,
  Direction,
} from "./types";

let email: string | null;
let phone: number | null;

const isEmail = (email: string): boolean => email.includes("@");

const convertGender = (gender: string): Gender => {
  if (gender === "M") {
    return "Male";
  } else {
    return "Female";
  }
};

const handleComponentSize = (component: HTMLElement): string => {
  const sizes: Size[] = ["small", "medium", "large"];
  const [currentSize] = sizes.filter((size) => {
    if (component.classList.contains(size)) return size;
  });
  return currentSize;
};

const onButtonClick = (direction: Direction, component: HTMLElement): void => {
  const currentSize: string = handleComponentSize(component);

  if (direction === "grow") {
    switch (currentSize) {
      case "small":
        component.classList.remove(currentSize);
        component.classList.add("medium");
        break;
      case "medium":
        component.classList.remove(currentSize);
        component.classList.add("large");
        break;
    }
  }

  if (direction === "shrink") {
    switch (currentSize) {
      case "large":
        component.classList.remove(currentSize);
        component.classList.add("medium");
        break;
      case "medium":
        component.classList.remove(currentSize);
        component.classList.add("small");
    }
  }
};

const convertSize = (size: string): Size => {
  switch (size) {
    case "S":
      return "small";
    case "M":
      return "medium";
    case "L":
      return "large";
    default:
      return "medium";
  }
};

const mapData = (data: PropsData): Data => {
  const sanitanizedData = data.map((item: PropsSingleData): SingleData => {
    const fullname: string = `${item.first_name}  ${item.last_name}`;
    email = null;
    phone = null;

    isEmail(item.contact)
      ? (email = item.contact)
      : (phone = parseInt(item.contact));

    return {
      name: fullname,
      pictureSource: item.image,
      occupation: item.occupation,
      gender: convertGender(item.gender),
      about: item.about,
      size: convertSize(item.card_size),
      onButtonClick: onButtonClick,
      email: email,
      phone: phone,
    };
  });
  return sanitanizedData;
};

export default mapData;
