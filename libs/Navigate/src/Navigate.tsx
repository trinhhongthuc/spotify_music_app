import * as Styled from './styles';
import { NavigatorItems } from './components';
import { HistoryPlayList } from './components/HistoryPlayList';

export function Navigate() {
  return (
    <Styled.Container>
      <NavigatorItems />
      <HistoryPlayList />
    </Styled.Container>
  );
}

export default Navigate;
