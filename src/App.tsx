import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ChartsContainer from "./components/ChartsContainer/ChartsContainer"

const queryClient = new QueryClient()

const locations = [
  {
    name: "Амстердам",
    latitude: 52.37,
    longitude: 4.92,
  },
  {
    name: "Нью-Йорк",
    latitude: 40.76,
    longitude: -73.98,
  },
  {
    name: "Токио",
    latitude: 35.68,
    longitude: 139.77,
  },
]

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChartsContainer locations={locations}/>
    </QueryClientProvider>
  )
}

export default App
