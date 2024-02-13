import { WeatherContext } from "../context"
import { useWeather } from "../hooks"

export const WeatherProvider = ({children}) => {
    const {loading, weatherData, error} = useWeather()
  return (
    <WeatherContext.Provider value={{loading, weatherData, error}}>
        {children}
    </WeatherContext.Provider>
  )
}
