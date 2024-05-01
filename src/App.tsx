
import { Route, Routes, useRoutes } from 'react-router-dom'

import { UserRouter } from './routers'
import { Footer, Header,Sidebar } from './components'

function App() {
  const UserRouting = useRoutes(UserRouter);
  return (
     <div>
      <Header/>
      <Routes>
        <Route path="/*" element={UserRouting}/>
      </Routes>
      
      <Sidebar/>
      <Footer/>
     </div>
    
  )
}

export default App
