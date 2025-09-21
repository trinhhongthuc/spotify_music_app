import * as Styled from './styles';
import { CardMusic } from '../CardMusic';

export interface IPlayListItem {
  src: string;
  title: string;
  subTitle: string;
  color: string;
}

interface IProps {
  title: string;
  playListItems: IPlayListItem[];
}

export const PlayList = (props: IProps) => {
  const { title, playListItems } = props;
  return (
    <Styled.PlayListContainer>
      <Styled.PlayListTitle>{title}</Styled.PlayListTitle>
      <Styled.PlayListItem>
        {playListItems.map((item, index) => (
          <CardMusic
            title={item.title}
            src={item.src}
            subTitle={item.subTitle}
            color={item.color}
          />
        ))}
      </Styled.PlayListItem>
    </Styled.PlayListContainer>
  );
};
