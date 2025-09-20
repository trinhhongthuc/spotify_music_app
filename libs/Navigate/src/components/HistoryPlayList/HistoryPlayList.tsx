import * as Styled from './styles';

export const HistoryPlayList = () => {
  const HISTORY = [
    {
      name: 'Chill Mix',
      id: 1,
    },
    {
      name: 'Your Top Songs 2021',
      id: 2,
    },
    {
      name: 'Mellow Songs',
      id: 3,
    },
    {
      name: 'Insta Hits',
      id: 4,
    },

    {
      name: 'Anime Lofi & Chillhop Music',
      id: 5,
    },
    {
      name: 'BG Afro “Select” Vibes',
      id: 6,
    },
    {
      name: 'Afro “Select” Vibes',
      id: 7,
    },
    {
      name: 'Happy Hits!',
      id: 8,
    },
    {
      name: 'Deep Focus',
      id: 9,
    },
    {
      name: 'Instrumental Study',
      id: 10,
    },
    {
      name: 'OST Compilations',
      id: 11,
    },
    {
      name: 'Nostalgia for old souled mill...',
      id: 12,
    },
    {
      name: 'Mixed Feelings',
      id: 12,
    },
  ];

  return (
    <Styled.HistoryContainer>
      {HISTORY.map((item, index) => (
        <Styled.HistoryItem key={index}>{item.name}</Styled.HistoryItem>
      ))}
    </Styled.HistoryContainer>
  );
};
