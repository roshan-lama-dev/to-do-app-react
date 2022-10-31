const length = 6;

const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";

export const randomStrGenerator = () => {
  let _id = "";
  for (let i = 0; i < length; i++) {
    _id += str[Math.floor(Math.random() * str.length)];
  }
  return _id;
};
