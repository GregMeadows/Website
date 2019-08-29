import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardActionArea, CardMedia, Typography, CardActions, Button, CardContent } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 150,
    },
}), {
    classNamePrefix: 'portfolio-card',
});

export const PortfolioCard: FunctionComponent<{
    title: string;
    bodyText: string;
    imageURL: string;
}> = ({title, bodyText, imageURL}) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageURL}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{bodyText}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Read More</Button>
            </CardActions>
        </Card>
    );
};