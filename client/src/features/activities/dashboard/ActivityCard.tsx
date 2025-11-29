import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import { useActivities } from '../../../lib/hooks/useActivities';
import { Link } from 'react-router';

type Props = {
  activity: Activity;
};

const ActivityCard = ({ activity }: Props) => {
  const { deleteActivity } = useActivities();

  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>{activity.title}</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }}>
          {activity.date}
        </Typography>
        <Typography variant='body2'>{activity.description}</Typography>
        <Typography variant='subtitle1'>
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}
      >
        <Chip label={activity.category} variant='outlined' />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          <Button size='medium' component={Link} to={`/activities/${activity.id}`} variant='contained' onClick={() => {}}>
            View
          </Button>
          <Button
            size='medium'
            color='error'
            variant='contained'
            disabled={deleteActivity.isPending}
            onClick={() => {
              deleteActivity.mutate(activity.id);
            }}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ActivityCard;
