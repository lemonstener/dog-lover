import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from './routing/Routes';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil'


function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Toaster />
      <RecoilRoot>
        <AppRoutes />
      </RecoilRoot>

    </QueryClientProvider>
  )
}

export default App
