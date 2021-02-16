import React, { useLayoutEffect, useState } from 'react'

export const ThemeContext = React.createContext({
  theme: 'light', // default value
  switchTheme: () => {}
})
// export default ThemeContext

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('light')

  // paints the app before rendering elements
  // useLayoutEffect(() => {
  //   const lastTheme = window.localStorage.getItem('theme')
  //   if (lastTheme === 'light') {
  //     setTheme('dark')
  //     applyTheme(darkTheme)
  //   } else if (!lastTheme || lastTheme === 'dark' ) {
  //     // if no theme was in local storage, set to light
  //     setTheme('light')
  //     applyTheme(lightTheme)
  //   }

  // }, [theme])

  function switchTheme() {
    // make theme transition smooth
    const body = document.getElementsByTagName('body')[0]
    body.style.cssText = 'transition: background 0.5s ease'

    if (theme === 'light') {
      setTheme('dark')
      applyTheme(darkTheme)
    } else if (!theme || theme === 'dark') {
      // if no theme was in local storage, set to light
      setTheme('light')
      applyTheme(lightTheme)
    }
    window.localStorage.setItem('theme', theme)
  }

  // applyTheme converts theme arrays to CSS texts and apply them to root
  function applyTheme(curTheme) {
    const root = document.getElementsByTagName('html')[0]
    root.style.cssText = curTheme.join(';')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

// theme styling

const lightTheme = [
  '--primary: #fffcf9',
  '--secondary: #0e2947',
  '--accent-1: #ff8552',
  '--accent-2: #f7b32b',
  '--accent-3: #FBD7B1',
  '--accent-4: #43aa8b'
]

const darkTheme = [
  '--primary: #1d2d50',
  '--secondary: #fcdab7',
  '--accent-1: #e94560',
  '--accent-2: #133b5c',
  '--accent-3: #fcdab7',
  '--accent-4: #fcdab7'
]
