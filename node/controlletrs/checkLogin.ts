import { CheckLoginRequestPayload } from "../../api/checkLogin";
import FrameDB from 'framedb';

const userDB = new FrameDB({
  filePath: './__data/user.json'
});



export const checkLogin = async (data: CheckLoginRequestPayload) =>{
  console.log(data);
  try {
    const query ={username: data.username};
    console.log(query);
    
    const c = await userDB.findOne(query)
    console.log(c);
    
  } catch (e) {
    console.error(e);
  }
  return {
    reply: true,
    payload: null,
    meta: null,
  }
}