import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router';
import { useActivities } from '../../../lib/hooks/useActivities';



const ActivityDetails = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate()
  const {id} = useParams()
  const {activity, isLoadingActivity} = useActivities(id)
  
  // If activity was not fond, do not try to display the event card
  if (isLoadingActivity) return <Typography>Loading 🙄...</Typography>;

  // If activity was not fond, do not try to display the event card
  if (!activity) return <Typography sx={{color: 'red', fontWeight: 'medium'}}>Event not found 🤷‍♂️...</Typography>;

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component='img'
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant='h5'>{activity.title}</Typography>
        <Typography variant='subtitle1' fontWeight='light'>
          {activity.date}
        </Typography>
        <Typography variant='body1'>{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color='primary' component={Link} to={`/edit-activity/${activity.id}`}>
          Edit
        </Button>
        <Button color='inherit' onClick={() => navigate('/activities')}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityDetails;
