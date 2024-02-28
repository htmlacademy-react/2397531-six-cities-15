import { Navigate } from 'react-router-dom'
import { AuthorizationStatus, AppRoutes } from "../../const"

type PrivateRouteProps = {
  authStatus: AuthorizationStatus,
  children: JSX.Element
}

function PrivateRoute({authStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.Login} />
  )
}

export default PrivateRoute;