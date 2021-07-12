import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 768px)": {
        minWidth: "auto",
        padding: "6px 0"
      }
    }
  }
})

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      className={classes.root}
    >
      <BottomNavigationAction href='https://github.com/CharlotteFrancis' label='Github' icon={<GitHubIcon />} />
      <BottomNavigationAction href='https://www.linkedin.com/in/charlotte-francis-wong/' label='LinkedIn' icon={<LinkedInIcon />} />
      <BottomNavigationAction href='https://twitter.com/FlavorfulObject' label='Twitter' icon={<TwitterIcon />} />
    </BottomNavigation>
  )
}
