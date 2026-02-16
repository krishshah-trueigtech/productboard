
import useLoginForm from "./useLoginForm";

const useSignup = async (data) => {
  if (!data) {
    throw new Error("No data received in Signup form");
  }
  
  console.log("Signing up user:", data);
  
  return await useLoginForm(data);
};

export default useSignup;