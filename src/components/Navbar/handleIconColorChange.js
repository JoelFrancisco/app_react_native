import homeGrayIcon from '../../../assets/Icons/homeGrayIcon.png';
import homeGreenIcon from '../../../assets/Icons/homeGreenIcon.png';
import searchGrayIcon from '../../../assets/Icons/searchGrayIcon.png';
import searchGreenIcon from '../../../assets/Icons/searchGreenIcon.png';
import favoritesGrayIcon from '../../../assets/Icons/favoritesGrayIcon.png';
import favoritesGreenIcon from '../../../assets/Icons/favoritesGreenIcon.png';
import settingsGrayIcon from '../../../assets/Icons/settingsGrayIcon.png';
import settingsGreenIcon from '../../../assets/Icons/settingsGreenIcon.png';

const handleIconColorChange = page => {
  const pagesIconsColors = {
    Home() {
      return {
        HomeIcon: homeGrayIcon,
        SearchIcon: searchGreenIcon,
        FavoritesIcon: favoritesGreenIcon,
        SettingsIcon: settingsGreenIcon,
      }
    },

    Search() {
      return {
        HomeIcon: homeGreenIcon,
        SearchIcon: searchGrayIcon,
        FavoritesIcon: favoritesGreenIcon,
        SettingsIcon: settingsGreenIcon,
      }
    },

    Favorites() {
      return {
        HomeIcon: homeGreenIcon,
        SearchIcon: searchGreenIcon,
        FavoritesIcon: favoritesGrayIcon,
        SettingsIcon: settingsGreenIcon,
      }
    },

    Settings() {
      return {
        HomeIcon: homeGreenIcon,
        SearchIcon: searchGreenIcon,
        FavoritesIcon: favoritesGreenIcon,
        SettingsIcon: settingsGrayIcon,
      }
    }
  };

  const changeIconsColor = pagesIconsColors[page];
  const IconsColors = changeIconsColor();
  return IconsColors;
}

export { handleIconColorChange }