import { useThemeStore } from '../stores/themeStore'
import IconButton from '@mui/material/IconButton'
import DarkMode from '@mui/icons-material/DarkMode'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <IconButton aria-label='dark mode' onClick={toggleTheme}>
      <DarkMode sx={{ color: theme === 'dark' ? '#fdd835' : '#555' }} />
    </IconButton>
  )
}
