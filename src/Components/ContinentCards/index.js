/*
    ConinentCards Component
*/

import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import continentData from '../../utils/continentData.json';
import styles from './styles';

function ContinentCard(props) {
    const {
        continent, // continent data
        classes //internal prop
    } = props;

    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={`${continentData[continent.code]}`}
                title={continent.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {continent.name}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default withStyles(styles)(ContinentCard)
