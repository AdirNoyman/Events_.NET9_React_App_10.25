import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import agent from '../api/agent';

// React Query will handle the data fetching and caching and state management
export const useActivities = () => {
  const queryClient = useQueryClient();

  // Get activities
  const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await agent.get<Activity[]>('/activities');
      return response.data;
    },
  });

  // Update activity
  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.put('/activities', activity);
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      });
    },
  });

  // Create activity
  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.post('/activities', activity);
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      });
    },
  });

  // Delete Activity
   const deleteActivity = useMutation({
    mutationFn: async (id: string) => {
      await agent.delete(`/activities/${id}`);
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['activities'],
      });
    },
  });

  return { activities, isPending, updateActivity, createActivity, deleteActivity };
};
