import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    width: 350,
    margin: '1rem',
  },
  media: {
    height: 150,
  },
}));

interface PortfolioCardProps {
  title: string;
  bodyText: string;
  imageURL: string;
}

const PortfolioCard: FunctionComponent<PortfolioCardProps> =
  function PortfolioCard({ title, bodyText, imageURL }) {
    const { classes } = useStyles();

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imageURL} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {bodyText}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
    );
  };

export default PortfolioCard;
