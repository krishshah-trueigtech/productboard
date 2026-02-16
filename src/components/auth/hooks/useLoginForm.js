import { validateUser } from "./action";

const useLoginForm = async (data) => {
  const result = await validateUser(data);

  if (result.error) {
    alert(result.error);
    return false;
  }

  return true;
};

export default useLoginForm;
