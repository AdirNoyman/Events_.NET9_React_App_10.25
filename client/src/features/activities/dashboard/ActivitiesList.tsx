import { Box } from "@mui/material"
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[];
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    closeForm: () => void;
   
}

const ActivitiesList = ({activities, selectActivity, closeForm}: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {activities.map(activity => (
             <ActivityCard key={activity.id} activity={activity} selectActivity={selectActivity} closeForm={closeForm} />
        ))}
    </Box>
  )
}

export default ActivitiesList