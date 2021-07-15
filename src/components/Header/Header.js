import MyAppbar from '../MyAppbar'
import { Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paddingDiv: {
    marginTop: theme.spacing(1),
    height: 100,
    backgroundColor: 'primary'
  }
}))

const Header = props => {
  const classes = useStyles()
  return (
    <>
      <div id='landing' className={classes.paddingDiv} bgcolor='primary' />
      <MyAppbar
        Link={props.Link}
      />
    </>
  )
}

export default Header
