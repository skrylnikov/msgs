import { senRequst } from './socket'
import nanoid from 'nanoid';
import { MessageTypes } from '../../api';

import {
  crypto_pwhash,
  crypto_pwhash_SALTBYTES,
  crypto_pwhash_OPSLIMIT_MODERATE,
  crypto_pwhash_MEMLIMIT_MODERATE,
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
} from 'libsodium-wrappers';

let pwhash: Uint8Array;

const createRootKey = (
  password: string,
  opsLimit = crypto_pwhash_OPSLIMIT_MODERATE,
  memLimit = crypto_pwhash_MEMLIMIT_MODERATE,
) => {
  const algorithm = crypto_pwhash_ALG_ARGON2I13;
  const salt = randombytes_buf(crypto_pwhash_SALTBYTES);
  pwhash = crypto_pwhash(crypto_secretbox_KEYBYTES, password, salt, opsLimit, memLimit, algorithm);
  
  return {
    algorithm,
    salt,
    opsLimit,
    memLimit,
  };
};


export const register = async (username: string, password: string) => {
  /*
  const a = await senRequst(MessageTypes.checkLogin, {username});

  console.log(a);
  

  /* */
  const rootKey = createRootKey(password);
  await senRequst(MessageTypes.register, {
    username,
    rootKey,
  });
  /**/
  return true;
}
