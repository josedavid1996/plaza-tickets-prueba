// import Navbar from '@components/layout/Navbar'
// import Sidebar from '@components/layout/Sidebar'
// import Spinner from '@components/shared/Spinner/Spinner'
// import EditPassword from '@pages/home/account/EditPassword'
// import EditProfile from '@pages/home/account/EditProfile'
// import WelcomePage from '@pages/home/WelcomePage'
import NotFoundPage from '@pages/404'
import Header from '@render/components/layout/Header'
import Dashboard from '@render/pages/home/ChooseEvent'
import { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomeRouter = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="hidden h-full lg:block">
        {/* <Sidebar mobile={false} onToggle={() => {}} onClose={() => {}} /> */}
      </div>

      <div className="flex-col w-full h-full overflow-y-auto">
        {/* <Header /> */}

        <Suspense
        // fallback={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}
        >
          <Routes>
            <Route index element={<Dashboard />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default HomeRouter
