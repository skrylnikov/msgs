import { senRequst } from './socket'
import nanoid from 'nanoid';
import { MessageTypes } from '../../api';

import {
  crypto_pwhash,
  crypto_pwhash_SALTBYTES,
  crypto_pwhash_OPSLIMIT_INTERACTIVE,
  crypto_pwhash_OPSLIMIT_MODERATE,
  crypto_pwhash_MEMLIMIT_MODERATE,
  crypto_pwhash_MEMLIMIT_INTERACTIVE,
  crypto_pwhash_ALG_ARGON2I13,

  crypto_secretbox_KEYBYTES,

  crypto_kdf_keygen,
  crypto_kdf_derive_from_key,

  crypto_secretbox_keygen,
  crypto_secretbox_easy,
  crypto_secretbox_open_easy,

  crypto_box_keypair,
  crypto_box_easy,
  crypto_box_NONCEBYTES,
  crypto_box_open_easy,
  randombytes_buf,
  to_base64,
  from_base64,
} from 'libsodium-wrappers';

let pwhash: Uint8Array;
const algorithm = crypto_pwhash_ALG_ARGON2I13;

const createRootKey = (
  password: string,
  opsLimit = crypto_pwhash_OPSLIMIT_MODERATE,
  memLimit = crypto_pwhash_MEMLIMIT_INTERACTIVE,
) => {
  console.log(0);
  console.time();
  const salt = randombytes_buf(crypto_pwhash_SALTBYTES);
  pwhash = crypto_pwhash(crypto_secretbox_KEYBYTES, password, salt, opsLimit, memLimit, algorithm);
  console.timeEnd();
  console.log(pwhash);
  


  return {
    algorithm,
    salt: to_base64(salt),
    opsLimit,
    memLimit,
  };
};

const decodeRootKey = (password: string,
  saltStr: string,
  opsLimit = crypto_pwhash_OPSLIMIT_MODERATE,
  memLimit = crypto_pwhash_MEMLIMIT_INTERACTIVE,
) => {
  const salt = from_base64(saltStr);

  pwhash = crypto_pwhash(crypto_secretbox_KEYBYTES, password, salt, opsLimit, memLimit, algorithm);

  console.log(pwhash);
  

};


export const register = async (username: string, password: string) => {
  /* */
  const a:any = await senRequst(MessageTypes.checkLogin, { username });

  console.log(a);

  if(a){
    decodeRootKey(password, a.rootKey.salt);
  } else {
    const rootKey = createRootKey(password);
    await senRequst(MessageTypes.register, {
      username,
      rootKey,
    });
  }
    return true;
}
