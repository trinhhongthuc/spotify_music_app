import styled from 'styled-components';
import React from 'react';

export const CardMusicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px 20px 15px 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .15);
`;

export const CardMusicWrapperImage = styled.div<
  React.HTMLAttributes<HTMLDivElement & { color: string }>
>`
  width: 182px;
  height: 182px;
  margin-bottom: 16px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.color};
    height: 7px;
  }
`;

export const CardMusicImageTitle = styled.div<
  React.HTMLAttributes<HTMLDivElement & { color: string }>
>`
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0;
  padding-left: 12px;

  font-weight: 700;
  font-family: 'Encode Sans Semi Expanded', sans-serif;
  color: white;
  font-size: 18px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    background: ${(props) => props.color};
    height: 23px;
    width: 5px;
  }
`;

export const CardMusicImage = styled.img<
  React.ImgHTMLAttributes<HTMLImageElement>
>`
  width: 100%;
  height: 100%;
`;

export const CardMusicImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, .3);
`;

export const CardMusicTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Encode Sans Semi Expanded', sans-serif;
  padding-bottom: 12px;
  color: white;
`;

export const CardMusicSubTitle = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Encode Sans Semi Expanded', sans-serif;
  color: #b3b3b3;
`;
