function showcityname() {
  var ciudad = document.querySelector('input').value;
  var test = document.querySelector('img');
  var weather_icon;
  var city_name;
  var country_name;
  var temp;
  var description;
  var apiKey = '5dd765a29b95b2e058dfd9f33a1dbd0d';


/**
 * Get all data of the local weather.
 *
 * @param {Data} data The response of the API
 * @returns {Object} All data of the location
 */

  $.getJSON(
    'http://api.openweathermap.org/data/2.5/weather?q=' +
      ciudad +
      '&appid=' +
      apiKey +
      '&units=metric',
    function(data) {
      city_name = data['name'];
      country_name = data['sys']['country'];
      temp = data['main']['temp'];
      description = data['weather'][0]['description'];
      weather_icon = data['weather'][0]['icon'];
      test = test.setAttribute(
        'src',
        'http://openweathermap.org/img/wn/' + weather_icon + '@2x.png'
      );

      // convert
      temp = temp.toFixed(1);
      temp = temp + ' °C';
      description = description.toUpperCase()

      // import
      document.querySelector('.container').style.visibility = 'visible';
      document.querySelector('#ciudad').textContent = city_name;
      document.querySelector('#temperatura').textContent = temp;
      document.querySelector('#descripcion').textContent = description;
      document.querySelector('#wicon').textContent = weather_icon;
      document.querySelector('#pais').textContent = country_name;
    }
  );
}

document.querySelector('button').addEventListener('click', showcityname);
