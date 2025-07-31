const useTheme = () => {
  const handleChangeMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return { handleChangeMode };
};

export default useTheme;
