import { signIn } from '@/actions/sign-in';
import { useFormState } from 'react-dom';

export const useHandleSignInRequest = () => {
  const [message, formAction] = useFormState(signIn, null);
  return {
    formAction,
    message
  };
}