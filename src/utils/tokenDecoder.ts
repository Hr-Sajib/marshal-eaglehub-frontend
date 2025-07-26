import { jwtDecode } from "jwt-decode";

const tokenDecoder = (token: string) => {
  const decoded = jwtDecode(token);
  return decoded;
};
export default tokenDecoder;
