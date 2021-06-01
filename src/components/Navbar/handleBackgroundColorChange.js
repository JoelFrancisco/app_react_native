const handleBackgroundColorChange = page => {
  const pagesBackgroundColors = {
    Home() {
      return {
        HomeBackground: "#1abc9c",
        SearchBackground: "#2c3e50",
        FavoritesBackground: "#2C3E50",
        SettingsBackground: "#2C3E50",
      }
    },

    Search() {
      return {
        HomeBackground: "#2C3E50",
        SearchBackground: "#1abc9c",
        FavoritesBackground: "#2C3E50",
        SettingsBackground: "#2C3E50",
      }
    },

    Favorites() {
      return {
        HomeBackground: "#2C3E50",
        SearchBackground: "#2C3E50",
        FavoritesBackground: "#1abc9c",
        SettingsBackground: "#2C3E50",
      }
    },

    Settings() {
      return {
        HomeBackground: "#2C3E50",
        SearchBackground: "#2C3E50",
        FavoritesBackground: "#2C3E50",
        SettingsBackground: "#1abc9c",
      }
    }
  };

  const changeBackgroundColor = pagesBackgroundColors[page];
  const backgroundColors = changeBackgroundColor();
  return backgroundColors;
}

export { handleBackgroundColorChange }