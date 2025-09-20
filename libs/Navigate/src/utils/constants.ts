import {
  HomeIcon,
  LibraryIcon,
  LikeIcon,
  PlayListIcon,
  SearchIcon,
} from '../assets/icons';
import { NAV_LIST_ENUM } from '../types';

export const NAV_LIST = [
  {
    name: 'Home',
    icon: HomeIcon,
    id: NAV_LIST_ENUM.HOME,
  },
  {
    name: 'Search',
    icon: SearchIcon,
    id: NAV_LIST_ENUM.SEARCH,
  },
  {
    name: 'Your Library',
    icon: LibraryIcon,
    id: NAV_LIST_ENUM.LIBRARY,
  },
  {
    name: 'Create Playlist',
    icon: PlayListIcon,
    id: NAV_LIST_ENUM.PLAY_LIST,
  },
  {
    name: 'Liked Songs',
    icon: LikeIcon,
    id: NAV_LIST_ENUM.LIKE,
  },
];
