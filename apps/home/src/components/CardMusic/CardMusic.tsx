import * as Styled from './styles';
import { IPlayListItem } from '../PlayList';
import { CardMusicImageOverlay, CardMusicImageTitle } from './styles';

export const CardMusic = (props: IPlayListItem) => {
  const { title, subTitle, src, color } = props;
  return (
    <Styled.CardMusicContainer>
      <Styled.CardMusicWrapperImage color={color}>
        <Styled.CardMusicImageOverlay />
        <Styled.CardMusicImageTitle color={color}>{title}</Styled.CardMusicImageTitle>
        <Styled.CardMusicImage src={src} />
      </Styled.CardMusicWrapperImage>
      <Styled.CardMusicTitle>{title} </Styled.CardMusicTitle>
      <Styled.CardMusicSubTitle>{subTitle} </Styled.CardMusicSubTitle>
    </Styled.CardMusicContainer>
  );
};
