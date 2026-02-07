import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mock } from '../../../shared/api/mock';

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { id: string; name: string; avatar: string }) =>
      mock.put(`/users/${payload.id}`, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
