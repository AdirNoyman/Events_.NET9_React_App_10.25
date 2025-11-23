import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useActivities } from '../../../lib/hooks/useActivities';

type Props = {
  selectedActivity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

const ActivityDetails = ({
  selectedActivity,
  cancelSelectActivity,
  openForm,
}: Props) => {
  const { activities } = useActivities();
  const activity = activities?.find((x) => x.id == selectedActivity.id);

  // If activity was not fond, do not try to display the event card
  if (!activity) return;

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
        <Button color='primary' onClick={() => openForm(activity.id)}>
          Edit
        </Button>
        <Button color='inherit' onClick={cancelSelectActivity}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityDetails;
