import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import ParticlesBg from 'particles-bg'

const useStyles = makeStyles({
  btn: {

  },

  title: {
    marginTop: '20%'
  },

  bottomText: {
    marginBottom: '25%'
  }
})

const Landing = () => {
  const classes = useStyles()

  return (
    <Container>
      <ParticlesBg type='lines' bg={true} />
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
        className={classes.bottomText}
      >
        Web Design | HTML | CSS | JavaScript | C++ | Python | Java | Node | Passport | Sequelize | React | SQL | NoSQL
      </Typography>
    </Container>
  )
}

export default Landing
