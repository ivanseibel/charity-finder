/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      // minWidth: 600,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    cardTitle: {
      fontSize: 20,
    },
    cardTitle1: {
      fontSize: 16,
    },
    cardPos: {
      // marginBottom: 12,
    },
    avatarRoot: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    avatarSmall: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    avatarLarge: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

interface ResultCardPropsType {
  title: string;
  organizationName: string;
  organizationLogoUrl: string;
  country: string;
  need: string;
  activities: string;
  contactUrl: string;
}

const ResultCard: React.FC<ResultCardPropsType> = ({
  title,
  organizationName,
  organizationLogoUrl,
  country,
  activities,
  need,
  contactUrl,
}) => {
  const classes = useStyles();

  // const history = useHistory();
  // borderWidth: 1,
  // borderColor: 'black',
  // borderStyle: 'solid',

  return (
    <Card className={classes.cardRoot}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={organizationLogoUrl}
            alt="Organization Logo"
            className={classes.avatarLarge}
          />
        }
        titleTypographyProps={{ variant: 'h4' }}
        title={title}
        subheaderTypographyProps={{ variant: 'h5' }}
        subheader={`${organizationName} (${country})`}
      />
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'flex-start',
          paddingTop: 0,
        }}
      >
        <Typography component="span" variant="h6" color="textSecondary">
          need
        </Typography>
        <Typography
          component="span"
          color="textPrimary"
          gutterBottom
          style={{ fontSize: 16 }}
        >
          {need}
        </Typography>
        <br />
        <Typography component="span" variant="h6" color="textSecondary">
          activities
        </Typography>
        <Typography
          component="span"
          color="textPrimary"
          gutterBottom
          style={{ fontSize: 16 }}
        >
          {activities}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          onClick={() => {
            window.open(contactUrl, '_blank');
            // window.location.href = contactUrl;
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ResultCard;
