import { PlayList } from '../components/PlayList';
import styled from 'styled-components';

const HomeContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(51, 51, 163, 1) 0%,
    rgba(15, 0, 0, 1) 17%,
    rgba(0, 0, 0, 1) 100%
  );

  min-height: 100ch;
  padding: 0 50px;
`;

export function App() {
  const playlistData = [
    {
      title: 'Top Hits 2025',
      playListItems: [
        {
          src: 'https://picsum.photos/id/1015/300/200',
          title: 'Sunset Dreams',
          subTitle: 'DJ Horizon',
          color: 'yellow',
        },
        {
          src: 'https://picsum.photos/id/1025/300/200',
          title: 'Midnight Groove',
          subTitle: 'Luna Beats',
          color: 'pink',
        },
        {
          src: 'https://picsum.photos/id/1035/300/200',
          title: 'Ocean Lights',
          subTitle: 'Wave Riders',
          color: 'orange',
        },
        {
          src: 'https://picsum.photos/id/1045/300/200',
          title: 'City Vibes',
          subTitle: 'Metro Sound',
          color: 'blue',
        },
      ],
    },
    {
      title: 'Chill & Relax',
      playListItems: [
        {
          src: 'https://picsum.photos/id/1055/300/200',
          title: 'Lazy Sunday',
          subTitle: 'Calm Collective',
          color: 'green',
        },
        {
          src: 'https://picsum.photos/id/1065/300/200',
          title: 'Soft Waves',
          subTitle: 'Ocean Breeze',
          color: 'aqua',
        },
        {
          src: 'https://picsum.photos/id/1075/300/200',
          title: 'Moonlight Walk',
          subTitle: 'Night Owls',
          color: 'purple',
        },
        {
          src: 'https://picsum.photos/id/1085/300/200',
          title: 'Morning Coffee',
          subTitle: 'Acoustic Duo',
          color: 'brown',
        },
      ],
    },
    {
      title: 'Workout Energy',
      playListItems: [
        {
          src: 'https://picsum.photos/id/1095/300/200',
          title: 'Power Run',
          subTitle: 'Beast Mode',
          color: 'red',
        },
        {
          src: 'https://picsum.photos/id/1105/300/200',
          title: 'High Voltage',
          subTitle: 'Electro Pulse',
          color: 'orange',
        },
        {
          src: 'https://picsum.photos/id/1115/300/200',
          title: 'Adrenaline Rush',
          subTitle: 'Sky Breakers',
          color: 'lime',
        },
        {
          src: 'https://picsum.photos/id/1125/300/200',
          title: 'Push Harder',
          subTitle: 'Iron Beats',
          color: 'blue',
        },
      ],
    },
  ];

  return (
    <HomeContainer>
      {playlistData.map((item, index) => (
        <PlayList
          title={item.title}
          playListItems={item.playListItems}
          key={index}
        />
      ))}
    </HomeContainer>
  );
}

export default App;
