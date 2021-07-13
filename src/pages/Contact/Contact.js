import { Paper, TextField, Typography } from "@material-ui/core"
import { Container } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core'
import { useState } from "react"
import Button from '@material-ui/core/Button'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import MyCard from '../../components/MyCard/MyCard'
import Image from '../../assets/contact.jpg'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

const Contact = () => {
  // styles
  const classes = useStyles()

  // state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    messageError: false
  })

  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setFormState({ ...formState, messageError: false })

    if (formState.message === '') {
      setFormState({ ...formState, messageError: true })
    }

    if (formState.message) {
      console.log(formState)
    }
  }

  return (
    <Container maxWidth='md'>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4' align='center'>
            Contact Me
          </Typography>
          <br /><br />
        </Grid>
        <Grid item xs={12} sm={7}>
          <br />
          <MyCard
            Image={Image}
            Title='Ask me stuff!'
            Body='Let me know if you need anything! I am free on weekdays before 4pm.'
            Body2='phone: (707) 328-1451'
            Body3='email: ChiharuTaru@gmail.com'
            width={999}
          />
        </Grid>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={4}>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              className={classes.field}
              id='name'
              name='name'
              variant='outlined'
              label='Name'
              color='secondary'
              fullWidth
              value={formState.name}
              onChange={handleInputChange}
            />
            <TextField
              className={classes.field}
              id='email'
              name='email'
              variant='outlined'
              label='Email'
              color='secondary'
              fullWidth
              value={formState.email}
              onChange={handleInputChange}
            />
            <TextField
              className={classes.field}
              id='message'
              name='message'
              variant='outlined'
              label='Message'
              color='secondary'
              multiline
              rows={4}
              fullWidth
              required
              value={formState.message}
              onChange={handleInputChange}
              error={formState.messageError}
            />
            <Button
              type='submit'
              color='secondary'
              variant='contained'
              endIcon={<KeyboardArrowRightIcon />}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Contact
