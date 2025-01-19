import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppRoutes } from './routing/Routes'


function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
