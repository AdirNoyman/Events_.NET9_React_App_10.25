import { Grid, List, ListItem, ListItemText } from '@mui/material';

type Props = {
  activities: Activity[];
};

const ActivitiesDashboard = ({ activities }: Props) => {
  return (
    <Grid container>
      <Grid size={9}>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default ActivitiesDashboard;
