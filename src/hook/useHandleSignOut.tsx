import { signOut } from '@/actions/sign-out'

export const useHandleSignOut = () => {
  
  const handleSignOut = () => {
    signOut()
  }
  
  return {
    handleSignOut
  };
}