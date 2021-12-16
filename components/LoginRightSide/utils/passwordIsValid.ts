import { isGeneratorFunction } from "util/types";

export const checkPwValidity = (string : string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  const passwordIsValid = passwordRegex.test(string);
  if(passwordIsValid) {
    return passwordIsValid;
  }
  if(!passwordIsValid) {
    return "THE PASSWORD IS NOT VALID"
  }
}


// REGEZ , 8 Chars , at least 1 Number and 1 String