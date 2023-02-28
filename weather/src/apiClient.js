import axios from 'axios';


export class ApiClient {
	constructor(location) {
		this.getWeatherUrl = null ;
		if (location) this.setWeatherLocation(location) ;
	}

	setWeatherLocation(location) {
		this.getWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}` ;
	}

  getWeather() {
    return this.request(this.getWeatherUrl) ;
  }

  request(url) {
    return axios.get(url) ;
  }
}