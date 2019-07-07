import { css } from 'linaria';

import { theme } from '../../theme';

export const page = css`
  background: ${theme.colorPrimary};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const header = css`
  background: ${theme.colorPrimaryDark};
  width: 100vw;
  color: ${theme.colorPrimaryText};
  h1 {
    margin: 0.6em;
  }
`;


export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40em;
  height: 20vw;
  margin-top: 15vh;
  padding: 1em;
  background: rgba(255, 255, 255, 0.59) none repeat scroll 0% 0%;
`;
