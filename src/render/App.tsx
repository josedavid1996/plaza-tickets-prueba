import React, { Suspense, lazy, useEffect, useMemo } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

import { useSessionStore } from './store/session'
import { Loading } from './components/shared'

const ChooseEvent = lazy(() => import('@render/pages/home/ChooseEvent'))
const LoginPage = lazy(() => import('@pages/auth/LoginPage'))
const Welcome = lazy(() => import('@pages/home/Welcome'))
const Scanner = lazy(() => import('@pages/home/Scanner'))
const Manual = lazy(() => import('@pages/home/Manual'))
const PrintTicket = lazy(() => import('@pages/home/PrintTicket'))
const ProcessEnd = lazy(() => import('@pages/home/ProcessEnd'))

const App = () => {
  const status = useSessionStore((state) => state.status)
  const isAuthentication = useSessionStore((state) => state.isAuthentication)

  useEffect(() => {
    isAuthentication()
  }, [])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        {useMemo(() => {
          switch (status) {
            case 'choose-event':
              return (
                <Suspense
                  fallback={
                    <div className="w-full min flex justify-center items-center ">
                      <Loading />
                    </div>
                  }
                >
                  <ChooseEvent />
                </Suspense>
              )

            case 'login':
              return (
                <Suspense
                  fallback={
                    <div className="w-full min flex justify-center items-center ">
                      <Loading />
                    </div>
                  }
                >
                  <LoginPage />
                </Suspense>
              )
            case 'welcome':
              return (
                <Suspense
                  fallback={
                    <div className="w-full min flex justify-center items-center ">
                      <Loading />
                    </div>
                  }
                >
                  <Welcome />
                </Suspense>
              )
            case 'scanner':
              return (
                <Suspense
                  fallback={
                    <div className="w-full min flex justify-center items-center ">
                      <Loading />
                    </div>
                  }
                >
                  <Scanner />
                </Suspense>
              )
            case 'manual':
              return (
                <Suspense
                  fallback={
                    <div className="w-full min flex justify-center items-center ">
                      <Loading />
                    </div>
                  }
                >
                  <Manual />
                </Suspense>
              )
            case 'print-ticket':
              return (
                <Suspense
                  fallback={
                    <div className="w-full min flex justify-center items-center ">
                      <Loading />
                    </div>
                  }
                >
                  <PrintTicket />
                </Suspense>
              )
            case 'process-end':
              return (
                <Suspense
                  fallback={
                    <div className="w-full min flex justify-center items-center ">
                      <Loading />
                    </div>
                  }
                >
                  <ProcessEnd />
                </Suspense>
              )

            default:
              return (
                <Suspense
                  fallback={
                    <div className="w-full min flex justify-center items-center ">
                      <Loading />
                    </div>
                  }
                >
                  <Welcome />
                </Suspense>
              )
          }
        }, [status])}
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
