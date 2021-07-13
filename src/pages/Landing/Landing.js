import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'

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
        Web Design | HTML | CSS | JavaScript | C++ | Python | Java | Node | Passport | Sequelize | React | SQL
      </Typography>
    </Container>
  )
}

export default Landing
