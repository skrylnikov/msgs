import { css } from 'linaria';

export const wrapper = css`
  position: relative;
  width: 300px;
  max-width: 100%;
  padding: 20px 0;
`;

export const input = css`
  border: none;
  border-bottom: 1px solid rgba(0,0,0,.12);
  font-size: 16px;
  padding: 4px 0;
  background: 0 0;
  color: black;
  font-weight: 200;
  width: 100%;
  :hover{
    border-bottom: 1px solid rgba(0,0,0,.35);
  }
`;

export const label = css`
  transition: all cubic-bezier(.4,0,.2,1) .2s;
  bottom: 0;
  color: rgba(0,0,0,.26);
  font-size: 16px;
  right: 0;
  pointer-events: none;
  position: absolute;
  top: 22px;
  width: 100%;
  font-weight: 300;

  ::after{
    background-color: var(--input-color);
    bottom: 20px;
    content: '';
    height: 2px;
    left: 45%;
    position: absolute;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    visibility: hidden;
    width: 10px;
  }
`;

export const notEmpty = css`
  font-size: 12px;
  top: 4px;
  visibility: visible;
`;

export const focused = css`
  color: var(--input-color);
  top: 4px;
  font-size: 12px;
  ::after{
    left: 0;
    visibility: visible;
    width: 100%;
  }
`; 