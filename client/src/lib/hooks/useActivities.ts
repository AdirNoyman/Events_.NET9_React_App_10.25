import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import agent from '../api/agent';
import { useLocation } from 'react-router';

// React Query will handle the data fetching and caching and state management
export const useActivities = (id?: string) => {
  const queryClient = useQueryClient();
  const location = useLocation();

  // Get all activities
  const { data: activities, isPending } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await agent.get<Activity[]>('/activities');
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // In idle situation, 5 minutes before data is considered stale and needs refetching
    enabled: !id && location.pathname === '/activities' // Only run this query when we are in the activities list page (not when there is a request for specific activity details page or for another page, besides activities list)

  });

  // Get specific activity
  const { data: activity, isLoading: isLoadingActivity } = useQuery({
    queryKey: ['activities', id],
    queryFn: async () => {
      const response = await agent.get<Activity>(`/activities/${id}`);
      return response.data;
    },
    // Execute this useQuery (for getting one specific activity) only if there was id passed by the client, thus preventing calling this query unnecessarily. the !!id cast the variable to bool, so if there is id (string) it will be true, otherwise false
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // In idle situation, 5 minutes before data is considered stale and needs refetching
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
     const response = await agent.post('/activities', activity);
     // Return the id of the new activity that was created
     return response.data;
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

  return {
    activities,
    isPending,
    updateActivity,
    createActivity,
    deleteActivity,
    activity,
    isLoadingActivity,
  };
};
