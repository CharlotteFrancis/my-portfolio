import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import PDF from '../../assets/CharlotteWong.pdf'
import useWindowDimensions from '../useWindowDimensions/useWindowDimensions'
import MenuIcon from '@material-ui/icons/Menu'
import MyDrawer from '../MyDrawer'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  links: {
    textDecoration: 'none'
  },
  leftElement: {
    flexGrow: 1
  }
}))

const MyAppbar = props => {
  const classes = useStyles()

  const { width } = useWindowDimensions()

  return (
    <AppBar
      elevation={0}
    >
      <ToolBar>
        <div
          className={`${classes.menuButton} ${classes.leftElement} ${classes.links}`}
          edge='end'
          color='primary'
          textDecoration='none'
        >
          <Button
            href='#landing'
          >
            <Typography
              color='textSecondary'
            >
              CW
            </Typography>
          </Button>
        </div>
        {
          (width > 600) ?
          <>
            <Button
              href='#about'
              className={classes.menuButton}
            >
              About
            </Button>
            <Button
              href='#portfolio'
              className={classes.menuButton}
            >
              Portfolio
            </Button>
            <Button
              href={PDF}
              className={classes.menuButton}
            >
              Resume
            </Button>
            <Button
              href='#contact'
              className={classes.menuButton}
            >
              Contact
            </Button>
          </>
            : <MyDrawer />
        }
      </ToolBar>
    </AppBar>
  )
}

export default MyAppbar
