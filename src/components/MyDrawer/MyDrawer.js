import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import PDF from '../../assets/CharlotteWong.pdf'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

export default function MyDrawer () {
  const classes = useStyles()
  const [state, setState] = useState({
    right: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open });
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Button fullWidth href='#landing'>
          <ListItemText>
            Top
          </ListItemText>
        </Button>
        <Button fullWidth href='#about'>
          <ListItemText>
            About
          </ListItemText>
        </Button>
        <Button fullWidth href='#portfolio'>
          <ListItemText>
            Portfolio
          </ListItemText>
        </Button>
        <Button fullWidth href={PDF}>
          <ListItemText>
            Resume
          </ListItemText>
        </Button>
        <Button fullWidth href='#contact'>
          <ListItemText>
            Contact
          </ListItemText>
        </Button>
      </List>
      <Divider />
    </div>
  )

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
      <Drawer anchor='right' open={state.right} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  )
}
