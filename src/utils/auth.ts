import bcrypt from "bcryptjs";

export const hashPassword = async function (password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};
