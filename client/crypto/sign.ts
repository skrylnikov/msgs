import MsgPack from 'msgpack5';

import { Buffer } from 'buffer';

const msgpack = MsgPack();
let signPrivateKey: CryptoKey;
let signPublickKey: CryptoKey;

const getSignKeys = async () => {
  if (signPrivateKey && signPublickKey) {
    return { signPrivateKey, signPublickKey }
  }

  if (localStorage.getItem('signPrivateKey') && localStorage.getItem('signPublickKey')) {
    const jsonPrivateKey: JsonWebKey = JSON.parse(localStorage.getItem('signPrivateKey'));
    const jsonPublickKey: JsonWebKey = JSON.parse(localStorage.getItem('signPublickKey'));

    signPrivateKey = await crypto.subtle.importKey('jwk', jsonPrivateKey, {
      name: 'RSASSA-PKCS1-v1_5',
      hash: { name: "SHA-256" },
    }, false, ['sign']);

    signPublickKey = await crypto.subtle.importKey('jwk', jsonPublickKey, {
      name: 'RSASSA-PKCS1-v1_5',
      hash: { name: "SHA-256" },
    }, true, ['verify']);

  } else {
    const key = await crypto.subtle.generateKey({
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: { name: "SHA-256" },
    }, true, ["sign", "verify"]);

    signPrivateKey = key.privateKey;
    signPublickKey = key.publicKey;

    const jsonPrivateKey = await crypto.subtle.exportKey('jwk', key.privateKey);
    const jsonPublickKey = await crypto.subtle.exportKey('jwk', key.publicKey);

    localStorage.setItem('signPrivateKey', JSON.stringify(jsonPrivateKey));
    localStorage.setItem('signPublickKey', JSON.stringify(jsonPublickKey));
  }

  return { signPrivateKey, signPublickKey }
};


export const sign = async (data: any) => {
  const { signPrivateKey } = await getSignKeys();

  const sign = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', signPrivateKey, msgpack.encode(data) as any);

  return Buffer.from(sign).toString('hex');
};

export const verify = async (publickKey: JsonWebKey, signStr: string, data: any) => {
  const signPublickKey = await crypto.subtle.importKey('jwk', publickKey, {
    name: 'RSASSA-PKCS1-v1_5',
    hash: { name: "SHA-256" },
  }, true, ['verify']);

  const sign = Buffer.from(signStr, 'hex');

  return crypto.subtle.verify('RSASSA-PKCS1-v1_5', signPublickKey, sign, msgpack.encode(data) as any);
};

export const verifyMyMessage = async (signStr: string, data: any) => {
  const { signPublickKey } = await getSignKeys();
  return verify(await crypto.subtle.exportKey('jwk', signPublickKey), signStr, data);
};
