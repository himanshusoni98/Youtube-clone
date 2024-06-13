import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from "./Components/Body"
import Header from "./Components/Header"
import MainContainer from './Components/MainContainer'
import Shorts from './Components/Shorts'
import WatchPage from './Components/WatchPage'
import Store from "./Utils/appStore"

function App() {
    const appRouter = createBrowserRouter([{
        path: "/",
        element: <Body/>,
        children:[
          {
            path:"/",
            element: <MainContainer/>
          },
          {
            path: "watch/:id",
            element: <WatchPage/>
          },
          {
            path: "shorts/:id",
            element: <Shorts/>
          }
        ]
    }])
  return (
    <Provider store={Store}>
    <div className=''>
      <Header />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )

}

export default App
