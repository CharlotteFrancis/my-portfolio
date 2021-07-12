import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  btn: {

  },

  title: {
    marginTop: 20
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        className={classes.title}
        variant='h1'
        color='textPrimary'
        align='center'
      >
        Charlotte Wong
        <hr />
      </Typography>
      <Typography
        color='textSecondary'
        align='center'
      >
        Web Design | HTML | CSS | JavaScript | C++ | Python | Java | Node | Passport | Sequelize | React | SQL
      </Typography>

      <Button
        className={classes.btn}
        variant='contained'
        color='primary'
        type='submit'
        onClick={() => console.log('you clicked me!')}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

    </Container>
  )
}

export default About
