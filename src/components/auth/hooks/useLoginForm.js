import { setCookie, route } from "./action";

const useLoginForm = async (data) => {
  if (!data) {
    throw new Error("No data recieved in Login form");
  }
  setCookie(data);
  const url = "dashboard";
  route(url);
};

export default useLoginForm;
