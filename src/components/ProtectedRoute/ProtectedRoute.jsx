import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  if (!props.user) return <Navigate to="/" />
  return (<> { props.children } </>)
}

export default ProtectedRoute