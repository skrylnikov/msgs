import { RegisterRequestPayload } from "../../api/register";
import { userDB } from '../models';

export const register = async (data: RegisterRequestPayload) =>{
  console.log(data);
  try {

    
    await userDB.insert({
      ...data,
      rootKey: {
        ...data.rootKey,
        //salt: data.rootKey.salt.toJSON(),
      }
    });
  } catch (e) {
    console.error(e);
  }
  return {
    reply: true,
    payload: null,
    meta: null,
  }
}