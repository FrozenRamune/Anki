import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import Header from './components/Header'
const TopPage = lazy(() => import(
  /* webpackPrefetch: true, webpackChunkName: '../home/toppage' */
  './pages/TopPage'
))
const CreateContentsMenu = lazy(() => import(
  /* webpackPrefetch: true, webpackChunkName: '../home/createcontents_menu' */
  './pages/CreateContentsMenu'
))
const ImportFromQuizlet = lazy(() => import(
  /* webpackPrefetch: true, webpackChunkName: '../home/import_from_quizlet' */
  './pages/ImportFromQuizlet'
))
const NotFound = lazy(() => import(
  /* webpackPrefetch: true, webpackChunkName: '../home/notfound' */
  './pages/NotFound'
))

export default () => (
  <>
    <BrowserRouter>
      <Header></Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path="create_contents">
            <Route index element={<CreateContentsMenu />} />
            <Route path="import" element={<ImportFromQuizlet />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
)