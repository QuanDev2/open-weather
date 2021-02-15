import React, { useState } from 'react'


const ThemeContext = React.createContext(
  {
    theme: 'dark', // default value
    switchTheme: () => { }
  }
)
export default ThemeContext

export function ThemeProvider(props) {

  const [theme, setTheme] = useState(window.localStorage.getItem('theme'))

  function switchTheme() {

    // make theme transition smooth
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';

    theme === 'dark' ? setTheme('light') : setTheme('dark')
    window.localStorage.setItem('theme', theme)
  }

  function applyTheme(theme) {
    const root = document.getElementsByTagName('html')[0]
    root.style.cssText = theme.join(';')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme: switchTheme
      }}>
      {props.chidlren}
    </ThemeContext.Provider>
  )
}



// theme styling

const lightTheme = [
  '--secondary: #0e2947',
  '--white: #fffcf9',
  '--black: #071013',
  '--accent-1: #ff8552',
  '--accent-2: #f7b32b',
  '--accent-3: #987284',
  '--accent-4: #43aa8b',
]

const darkTheme = [
  '--secondary: #ff8552',
  '--white: #fffcf9',
  '--black: #071013',
  '--accent-1: #ff8552',
  '--accent-2: #f7b32b',
  '--accent-3: #987284',
  '--accent-4: #43aa8b',
]
