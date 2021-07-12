// import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Image from '../../assets/c9c5ba.png'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles({
  aboutPaper: {
    backgroundImage: `url(${Image})`
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <Container>
      <Paper component='div' elevation={0} style={{ backgroundColor: '#252525', height: '80vh', marginTop: '1vh' }}>
        <Typography variant='h2'>
          About Me:
        </Typography>
        <br />
        <Typography>
          Food enjoyer
        </Typography>
      </Paper>
    </Container>
  )
}

export default About
