/*
  CountryCard Component

  uses materialUI Card component
*/

import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './styles'


function CountryCard(props) {
    const {
      country, // individual country data
      classes // internal prop
    } = props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardContent>
              
                <Typography gutterBottom variant="h5" component="h2">
                  <span className={classes.emoji}>{country.emoji}</span> {country.name}
                </Typography>

                <Typography variant ="body2" color="textSecondary" component="p">
                  {`Capital: ${country.capital || "--"}`}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {`Native: ${country.native}`}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {`Phone: ${country.phone}`}
                </Typography>  

                <Typography variant="body2" color="textSecondary" component="p">
                  {`States: ${country.states.length}`}
                </Typography>

            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default withStyles(styles)(CountryCard)
