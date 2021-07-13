// import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Image from '../../assets/c9c5ba.png'
import CardMedia from '@material-ui/core/CardMedia'
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles({
  aboutPaper: {
    backgroundImage: `url(${Image})`,
    padding: '20px'
  },
  Media: {
    height: '350px',
    width: '60%',
    margin: 'auto'
  },
  aboutText: {
    marginLeft: '20%',
    width: '60%'
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <Container>
      <Paper component='div' elevation={0} style={{ backgroundColor: '#252525', marginTop: '1vh', padding: '30px'}}>
        <Typography
          variant='h4'
          className={classes.aboutText}
        >
          About Charlotte:
        </Typography>
        <hr
          width='60%'
        />
        <br />
        <Box
          alignContent='center'
        >
          <CardMedia
            className={classes.Media}
            title='me'
            image={Image}
          />
          <hr
            width='60%'
          />
          <div className={classes.aboutText}>
            <Typography
              variant='h6'
            >
              Creating good design and  writing clean code is very satisfying to me!
              I like working with groups that can help me do both of these things.
              <br /><br />
              I enjoy playing games, watching anime, and eatting out in my free time!
              <br /><br />
              This is a temporary portfolio page that I will rework in the future!
            </Typography>
          </div>
          <br /><br />
        </Box>
      </Paper>
      <br />
    </Container>
  )
}

export default About
