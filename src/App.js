// react router imports
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// MUI imports
// import { ThemeProvider } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// page imports
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

// component imports
import MyAppbar from './components/MyAppbar'

// my theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: 'fefefe'
//     }
//   }
// })

// dark theme
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#252525'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <MyAppbar
            Link={Link}
            theme={theme}
          />
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
