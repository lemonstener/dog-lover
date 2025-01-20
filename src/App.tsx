import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './routing/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Toaster />
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App
