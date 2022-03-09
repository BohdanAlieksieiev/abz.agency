export const splitText = (str: string, maxLength: number) => {
  return str.length > maxLength
    ? str
        .split("")
        .splice(0, maxLength - 3)
        .join("") + "..."
    : str;
};
