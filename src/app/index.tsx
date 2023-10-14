import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

const HomePage = React.lazy(() => import('app/pages/HomePage'))
const NotFoundPage = React.lazy(() => import('app/pages/NotFoundPage'))

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<></>}>
            <HomePage />
          </React.Suspense>
        }
      />
      <Route
        path="/404"
        element={
          <React.Suspense fallback={<></>}>
            <NotFoundPage />
          </React.Suspense>
        }
      />
      <Route
        path="*"
        element={<Navigate to="/404" />}
      />
    </Routes>
  </BrowserRouter>
)

export default App
