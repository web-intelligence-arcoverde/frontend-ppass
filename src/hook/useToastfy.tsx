import { DefaultToastifyOption } from '@/app/model/DefaultToastifyOption';
import { toast } from 'react-toastify';

const toastfyDefaultOption = new DefaultToastifyOption();

export const useToastfy = () => {
  
  const errorEmitterToast = (message:string) => {
    //@ts-expect-error : Constructor
    toast.error(message, toastfyDefaultOption);
  }
  
  const successEmitterToast = (message: string) => {
    //@ts-expect-error : Constructor
    toast.success(message, toastfyDefaultOption);
  };
  
  return {
    errorEmitterToast,
    successEmitterToast,
  };
  
}