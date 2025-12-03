import { AccessTime, Place } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,  
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography,
} from '@mui/material';
import { Link } from 'react-router';
import { formatDateTime } from '../../../lib/util/util';

type Props = {
  activity: Activity;
};

const ActivityCard = ({ activity }: Props) => {
  const isUserTheHostOfTheEvent = false;
  const isUserAttendingTheEvent = false;
  const eventLabel = isUserTheHostOfTheEvent
    ? 'You are hosting'
    : isUserAttendingTheEvent
    ? 'You are attending'
    : '';
  const isEventCancelled = false;
  const color = isUserTheHostOfTheEvent
    ? 'secondary'
    : isUserAttendingTheEvent
    ? 'warning'
    : 'default';

  return (
    <Card elevation={3} sx={{ borderRadius: 2 }}>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          sx={{ fontWeight: 'bold', fontSize: 20 }}
          subheader={
            <>
              Hosted by <Link to={`/profiles/bob`}>Bob</Link>
            </>
          }
        />
        <Box display='flex' flexDirection='column' gap={2} mr={2}>
          {(isUserTheHostOfTheEvent || isUserAttendingTheEvent) && (
            <Chip label={eventLabel} color={color} sx={{ borderRadius: 2 }} />
          )}
          {isEventCancelled && (
            <Chip label='Cancelled' color='error' sx={{ borderRadius: 2 }} />
          )}
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />
      <CardContent sx={{ p: 0 }}>
        <Box display='flex' alignItems='center' mb={2} px={2}>
          <Box display='flex' flexGrow={0} alignItems='center'>
            <AccessTime sx={{ mr: 1 }} />
          <Typography variant='body2' noWrap>
            {formatDateTime(activity.date).date} at {formatDateTime(activity.date).time}
          </Typography>
          </Box>
          
          <Place sx={{ ml: 3, mr: 1 }} />
          <Typography variant='body2'>{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box
          display='flex'
          gap={2}
          sx={{ backgroundColor: 'grey.200', py: 3, pl: 3 }}
        >
          Attendees go here
        </Box>
      </CardContent>
      <CardContent sx={{ pb: 2 }}>
        <Typography variant='body2'>{activity.description}</Typography>

        <Button
          size='medium'
          component={Link}
          to={`/activities/${activity.id}`}
          variant='contained'
          onClick={() => {}}
          sx={{ display: 'flex', justifySelf: 'flex-end', borderRadius: 3 }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
