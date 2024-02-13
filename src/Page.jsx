import { useContext, useEffect, useState } from 'react'
import { Header } from './components/Header/Header'
import { WeatherBoard } from './components/Weather/WeatherBoard'
import { WeatherContext } from './context'

import ClearSky from './assets/backgrounds/clear-sky.jpg'
import fewClouds from './assets/backgrounds/few-clouds.jpg'
import Mist from './assets/backgrounds/mist.jpeg'
import RainyDay from './assets/backgrounds/rainy-day.jpg'
import ScatteredClouds from './assets/backgrounds/scattered-clouds.jpg'
import Snow from './assets/backgrounds/snow.jpg'
import ThunderStorm from './assets/backgrounds/thunderstorm.jpg'
import Winter from './assets/backgrounds/winter.jpg'

export const Page = () => {
    const { weatherData, loading } = useContext(WeatherContext)
    const [climateImage, setClimateImage] = useState("")

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDay;
            case "Clouds":
                return ScatteredClouds;
            case "Clear":
                return ClearSky;
            case "Snow":
                return Snow;
            case "Thunder":
                return ThunderStorm;
            case "Fog":
                return Winter;
            case "Haze":
                return fewClouds;
            case "Mist":
                return Mist;
            default:
                return ClearSky;
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate)
        setClimateImage(bgImage)
    }, [weatherData.climate])

    return (
        <> {loading.state ? (

            <div className='flex bg-gray-300 rounded-md w-96 mt-20 mx-auto'>
                <p className='text-black text-center text-3xl'>{loading.message}</p>
            </div>
        ) :
            (<div
                style={{backgroundImage: `url('${climateImage}')`}}
                className='grid place-items-center h-screen bg-no-repeat bg-cover'>
                <Header />
                <main>
                    <WeatherBoard />
                </main>
            </div>)
        }
        </>
    )
}
