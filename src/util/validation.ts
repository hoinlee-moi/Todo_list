export const validateEmail = (email: string): boolean => {
  return email.includes("@");
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};
