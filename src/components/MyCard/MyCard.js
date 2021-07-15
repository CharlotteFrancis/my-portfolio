import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
  root: {
    // maxWidth: 999
  }
})

// props Title, Body, Body2, Body3, repo, link, width
const MyCard = props => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0} style={{ maxWidth: props.width }}>
      <CardActionArea href={props.link}>
        <CardMedia
          component='img'
          alt='Card Image'
          height='140'
          image={props.Image}
          title='Card Image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.Title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.Body}
            {(props.Body2) ? (<><br /><br />  {props.Body2}</>) : (null)}
            {(props.Body3) ? (<><br /><br />  {props.Body3}</>) : (null)}
          </Typography>
        </CardContent>
      </CardActionArea>
      {
        (props.repo)
          ? <CardActions>
            <Button href={props.link} size='small' color='Secondary'>
              <LinkIcon />
            </Button>
            <Button href={props.repo} size='small' color='Secondary'>
              <GitHubIcon />
            </Button>
          </CardActions>
          : null
      }
    </Card>
  )
}

export default MyCard
