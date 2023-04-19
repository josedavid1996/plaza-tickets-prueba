import { useEffect } from 'react'

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import AuthRouter from './AuthRouter'
import HomeRouter from './HomeRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { useSessionStore } from '@render/store/session'

const RootRouter = () => {
  const location = useLocation()
  const status = useSessionStore((state) => state.status)
  useEffect(() => {
    if (location.pathname && !location.pathname.includes('auth')) {
      localStorage.setItem('lastpath', location.pathname)
    }
  }, [location.pathname])
  const isAuth = status
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute isAuth={isAuth}>
            <HomeRouter />
          </PrivateRoute>
        }
      />

      <Route
        path="auth/*"
        element={
          <PublicRoute isAuth={isAuth}>
            <AuthRouter />
          </PublicRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RootRouter
