
export interface RootKey {
  algorithm: number;
  salt: Buffer;
  opsLimit: number;
  memLimit: number;
}

export interface RegisterRequestPayload {
  username: string;
  rootKey: RootKey;
}