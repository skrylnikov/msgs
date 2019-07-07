import { css } from 'linaria';

export const wrapper = css`
  color: #757575;
  position: relative;
font-size: 16px;
display: inline-block;
box-sizing: border-box;
width: 300px;
max-width: 100%;
margin: 0;
padding: 20px 0;
`;

export const input = css`
  border: none;
  border-bottom: 1px solid rgba(0,0,0,.12);
  margin: 0;
  padding: 4px 0;
  display: block;
font-size: 16px;
font-family: "Helvetica","Arial",sans-serif;
margin: 0;
padding: 4px 0;
width: 100%;
background: 0 0;
text-align: left;
color: inherit;
`;

export const label = css`
  transition-property: top;
  transition-duration: .2s;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  bottom: 0;
color: rgba(0,0,0,.26);
font-size: 16px;
left: 0;
right: 0;
pointer-events: none;
position: absolute;
display: block;
top: 24px;
width: 100%;
overflow: hidden;
white-space: nowrap;
text-align: left;
`;

export const focused = css`
  color: gold;
  .${label} {
    color: #3f51b5;
    font-size: 12px;
    top: 4px;
    visibility: visible;
  }

  .${label}::after{
    background-color: #3f51b5;
    bottom: 20px;
    content: '';
    height: 2px;
    position: absolute;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    left: 0;
    visibility: visible;
    width: 100%;
  }
`; 