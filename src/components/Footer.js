import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 20px);
`;

const Link = styled.a`
  color: #aaa;
  margin: 5px;
`;

const Text = styled.a`
  color: #888;
`;

export default () => (<Footer>
  <Text>made by <Link href="https://twitter.com/RafalWilinski" target="_blank" rel="noopener">@RafalWilinski</Link></Text>
  <Text>, available as: </Text>
  <Link href="https://chrome.google.com/webstore/detail/nofdgimpkmhabeckcllmanidoglpofko" target="_blank" rel="noopener">Chrome Extension</Link>
  <Text>or</Text>
  <Link href="https://annualgoals.xyz" target="_blank" rel="noopener">Website</Link>
</Footer>)