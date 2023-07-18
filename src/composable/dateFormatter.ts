// useDateFormatter.ts

import { ref, computed } from 'vue';
import { format } from 'date-fns';

export default function useDateFormatter(initialDate: string) {
  const date = ref(initialDate);

  const formattedDate = computed(() => {
    const parsedDate = new Date(date.value);
    return format(parsedDate, 'MMMM d, yyyy');
  });

  const formattedTime = computed(() => {
    const parsedDate = new Date(date.value);
    return format(parsedDate, 'HH:mm');
  });

  return {
    formattedDate,
    formattedTime
  };
}
