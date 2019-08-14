import { RegisterRequestPayload } from "../../api/register";
import FrameDB from 'framedb';

const userDB = new FrameDB({
  filePath: './__data/user.json'
});



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