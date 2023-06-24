// import Loader from 'react-loader-spinner';

import styled from 'styled-components';

import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Container = styled.section`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
