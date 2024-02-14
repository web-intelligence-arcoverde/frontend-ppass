import { signInRequestService } from '@/service/auth/sign-in-request-service';
import { ISignIn } from '@/types/sign-in';
import { useToastfy } from './useToastfy';

export const useHandleSignInRequest = () => {
  
  const {errorEmitterToast, successEmitterToast} = useToastfy()
 
  const signInRequest = async (data: ISignIn) => {
    try {
      await signInRequestService(data);
      successEmitterToast('Bem vindo')
    } catch (error) {
      errorEmitterToast("Credenciais incorretas")
    }
  };
  
  
  return {
    signInRequest,
  };
}