import { Route, Routes } from 'react-router-dom'

import LoginPage from '@render/pages/auth/LoginPage'

const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="change-password" element={<RecoveryPassword />} /> */}
      </Routes>
    </div>
  )
}

export default AuthRouter
