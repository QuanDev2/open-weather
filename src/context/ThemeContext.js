import React, { useLayoutEffect, useState } from 'react'

export const ThemeContext = React.createContext({
  theme: 'light', // default value
  switchTheme: () => {}
})
// export default ThemeContext

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('light')

  // paints the app before rendering elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('theme')
    if (lastTheme === 'light') {
      setTheme('dark')
      applyTheme(darkTheme)
    } else if (!lastTheme || lastTheme === 'dark' ) {
      // if no theme was in local storage, set to light
      setTheme('light')
      applyTheme(lightTheme)
    }
  }, [theme])

  function switchTheme() {
    // make theme transition smooth
    const body = document.getElementsByTagName('body')[0]
    body.style.cssText = 'transition: background 0.5s ease'

    theme === 'light' ? setTheme('dark') : setTheme('light')

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
  '--background-body: #fffcf9',
  '--background-nav: #0e2947 ',
  '--accent-nav: #f7b32b',
  '--foreground-nav: #fffcf9',
  '--accent-success: #43aa8b',
  '--accent-error: #ff8552',
  '--background-card: #FBD7B1',
  '--foreground-card: #0e2947'
]

const darkTheme = [
  '--background-body: #1f1e1d',
  '--background-nav: #272628 ',
  '--accent-nav: #f7b32b',
  '--foreground-nav: #ffffff',
  '--accent-success: #43aa8b',
  '--accent-error: #e94560',
  '--background-card: #272628',
  '--foreground-card: #ffffff'
]
