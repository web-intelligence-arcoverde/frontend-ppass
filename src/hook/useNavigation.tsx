import { useRouter } from 'next/navigation';


export const useNavigation = () => {
  const router = useRouter();

  const handleRouter = (routerName: string) => {
    router.push(routerName);
  };
  
  return {
    handleRouter,
  };
}