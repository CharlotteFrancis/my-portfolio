import { Container, Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import MyCard from "../../components/MyCard/MyCard"
import Image from '../../assets/contact.jpg'
import projects from '../../assets/projects.js'

const Portfolio = () => {
  return (
    <Container>
      <Typography variant='h4' align='center'>
        Stuff I've Made
      </Typography>
      <br /><br />
      <Grid container spacing={3}>

        {
          projects.map((element, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <MyCard
                Title={element.Title}
                Body={element.Body}
                width={element.width}
                repo={element.repo}
                link={element.link}
                Image={element.Image}
              />
            </Grid>
          ))
        }

      </Grid>
    </Container>
  )
}

export default Portfolio
