import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  allowedRoles: string[]
}

const RequireAuth: FC<Props> = ({ allowedRoles }) => {
  const roles: string[] = ['admin', 'user']
  const isAuth = true

  return roles.find((r) => allowedRoles.includes(r)) ? (
    <Outlet />
  ) : isAuth ? (
    <Navigate to="/notfound" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuth
