import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store/store.ts'
import { Provider } from 'react-redux'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/test-task-Ketopay'>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
