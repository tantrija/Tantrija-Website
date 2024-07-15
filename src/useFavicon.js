import { useEffect } from 'react';

const useFavicon = () => {
  useEffect(() => {
    const lightThemeIcon = '/favicon-light.svg';
    const darkThemeIcon = '/favicon-dark.svg';

    const updateFavicon = (isDark) => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/svg';
      link.rel = 'shortcut icon';
      link.href = isDark ? lightThemeIcon : darkThemeIcon;
      document.getElementsByTagName('head')[0].appendChild(link);
    };

    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => updateFavicon(e.matches);

    matchMedia.addListener(handleChange);
    updateFavicon(matchMedia.matches);

    return () => {
      matchMedia.removeListener(handleChange);
    };
  }, []);
};

export default useFavicon;
