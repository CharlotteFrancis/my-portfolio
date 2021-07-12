import MyAppbar from '../MyAppbar'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paddingDiv: {
    marginRight: theme.spacing(2),
    height: 100,
    backgroundColor: 'primary'
  }
}))

const Header = props => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.paddingDiv} bgcolor="primary.main"/>
      <MyAppbar
        Link={props.Link}
      />
    </>
  )
}

export default Header
