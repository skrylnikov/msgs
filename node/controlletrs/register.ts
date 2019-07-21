import { RegisterRequestPayload } from "../../api/register";

export const register = (data: RegisterRequestPayload) =>{
  console.log(data);
  return {
    reply: true,
    payload: null,
    meta: null,
  }
}