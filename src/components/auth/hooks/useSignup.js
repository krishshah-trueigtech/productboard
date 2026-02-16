import useLoginForm from "./useLoginForm"
const useSignup = (data) => {
  if (!data) {
    throw new Error("No data recieved in Login form");
  }
  console.log(data);
  useLoginForm(data)
  

};

export default useSignup;
