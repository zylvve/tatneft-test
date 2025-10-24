import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ChartsContainer from "./components/ChartsContainer/ChartsContainer"
import { locations } from "./locations"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChartsContainer locations={locations}/>
    </QueryClientProvider>
  )
}

export default App
