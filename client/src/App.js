import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Layout} from './features/layout/layout'
import {Home} from './features/home/home'
import {Register} from './features/register/register'
import {Login} from './features/login/login'
import {Dashboard} from './features/dashboard/dashboard'
import {LayoutLogged} from './features/layout/layout-logged'
import {LogOut} from './features/log-out/log-out'
import {Posts} from './features/posts/posts'
import {Topics} from './features/topics/topics'
import {DisplayPost} from './features/display-post/display-post'
import {Profile} from './features/profile/profile'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Route>
        <Route path="/resources" element={<LayoutLogged/>} >
          <Route path="/resources/dashboard" element={<Dashboard />} >
            <Route index element={<Topics />}/>
            <Route path="/resources/dashboard/posts" element={<Posts />}/>
            <Route path="/resources/dashboard/displaypost" element={<DisplayPost />}/>
          </Route>
          <Route path="/resources/log-out" element={<LogOut />}/>
          <Route path="/resources/profile" element={<Profile />}/>
        </Route>
        <Route path="*" element={(<div>Page not Found, 404</div>)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
