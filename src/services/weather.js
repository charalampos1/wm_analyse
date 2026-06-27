export async function fetchWeather(venueCode, date, time, venuesData) {
  const venue = venuesData[venueCode];
  if (!venue) return null;

  try {
    const d = new Date(`${date}T${time}:00`);
    const hour = d.getHours();
    
    // Check if the match is in the past or future more than 5 days
    const now = new Date();
    const diffDays = (d - now) / (1000 * 60 * 60 * 24);
    
    let apiUrl = '';
    if (diffDays < -5) {
      apiUrl = `https://archive-api.open-meteo.com/v1/archive?latitude=${venue.lat}&longitude=${venue.lon}&start_date=${date}&end_date=${date}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=${venue.tz}`;
    } else {
      apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${venue.lat}&longitude=${venue.lon}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=${venue.tz}`;
    }

    const res = await fetch(apiUrl);
    if (!res.ok) return null;
    const data = await res.json();
    
    let idx = 0;
    if (data.hourly && data.hourly.time) {
      const targetTimeStr = `${date}T${String(hour).padStart(2, '0')}:00`;
      idx = data.hourly.time.findIndex(t => t.startsWith(targetTimeStr));
      if (idx === -1) idx = 12; // Fallback
    }

    const wmo = data.hourly.weather_code[idx];
    let emoji = '🌤️', text = 'Heiter';
    if (wmo === 0) { emoji = '☀️'; text = 'Klar'; }
    else if (wmo <= 3) { emoji = '🌤️'; text = 'Leicht bewölkt'; }
    else if (wmo <= 49) { emoji = '🌫️'; text = 'Nebel'; }
    else if (wmo <= 69) { emoji = '🌧️'; text = 'Regen'; }
    else if (wmo <= 79) { emoji = '❄️'; text = 'Schnee'; }
    else { emoji = '⛈️'; text = 'Gewitter'; }

    return {
      temp: Math.round(data.hourly.temperature_2m[idx]),
      humidity: Math.round(data.hourly.relative_humidity_2m[idx]),
      wind: Math.round(data.hourly.wind_speed_10m[idx]),
      emoji,
      text
    };
  } catch (e) {
    console.error('Weather fetch error:', e);
    return null;
  }
}
