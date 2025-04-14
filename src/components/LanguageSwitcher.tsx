// LanguageSwitcher.tsx
import { useLanguageSwitcherStore } from '../stores/languageSwitcher'
import { translations, Language } from '../translation/index'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageSwitcherStore()

  const handleChange = (event: SelectChangeEvent<'ua' | 'en'>) => {
    setLanguage(event.target.value as 'en' | 'ua')
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>
          {translations[language].selectLang}
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={language}
          label='language'
          onChange={handleChange}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'ua'}>Українська</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
