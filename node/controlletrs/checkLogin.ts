import { CheckLoginRequestPayload } from "../../api/checkLogin";
import { userDB } from '../models';

export const checkLogin = async (data: CheckLoginRequestPayload) =>{
  console.log(data);
  try {
    const query ={username: data.username};
    console.log(query);
    
    const _user = await userDB.findOne(query)
    console.log({_user});

    if(!_user){
      return {
        reply: true,
        payload: null,
        meta: null,
      }
    }

    const {_id, ...user} = _user;
    
    return {
      reply: true,
      payload: {
        ...user,
      },
      meta: null,
    }
  } catch (e) {
    console.error(e);
  }
  return {
    reply: true,
    payload: null,
    meta: null,
  }
}