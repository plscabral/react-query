import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

// contexts
import { NotificationContextProvider } from './hooks/useNotitication.tsx'

// react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// create a client
const queryClient = new QueryClient()

// miragejs
import { makeServer } from './utils/mirage.ts';

if (process.env.NODE_ENV == "development") {
  makeServer();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <NotificationContextProvider>
        <App />
      </NotificationContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
