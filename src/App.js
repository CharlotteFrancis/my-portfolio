// react router imports
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// MUI imports
// import { ThemeProvider } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import teal from '@material-ui/core/colors/teal'

// page imports
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

// component imports
import Header from './components/Header'
import Footer from './components/Footer'

// dark theme
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#252525'
    },
    secondary: {
      main: teal[100]
    },
    text: {
      secondary: teal[200]
    }
  },
  typography: {
    h4: {
      fontWeight: 200
    },
    h6: {
      fontWeight: 100
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Header
            Link={Link}
          />
          <Switch>
            <Route exact path='/my-portfolio'>
              <Landing />
            </Route>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/my-portfolio/about'>
              <About />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
