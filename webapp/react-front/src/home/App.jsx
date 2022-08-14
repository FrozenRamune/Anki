import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import loadable from '@loadable/component'

import Header from './components/Header'
const TopPage = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: '../home/toppage' */'./pages/TopPage'))
const CreateContents = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: '../home/createcontents' */'./pages/CreateContents'))
const NotFound = loadable(() => import(/* webpackPrefetch: true, webpackChunkName: '../home/notfound' */'./pages/NotFound'))

export default () => (
  <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="create_contents" element={<CreateContents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
)