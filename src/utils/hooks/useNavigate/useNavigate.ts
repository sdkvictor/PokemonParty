import { useNavigate as useNavigateReactRouterDom } from 'react-router-dom';

export default function useNavigate() {
  const navigate = useNavigateReactRouterDom();

  const onClickNavigate = (route: string) => () => navigate(route);

  return { navigate, onClickNavigate };
}
