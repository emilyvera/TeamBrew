fetch("https://api.worldweatheronline.com/premium/v1/weather.ashx?key=f6fc42e00e6a4aaa96b32135182307&q=60452&format=json&num_of_days=1")
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
      temp.innerHTML = "<h1>The current weather is " + data.data.current_condition[0].temp_F + "F</h1>"
      condition.innerHTML = "<p>" + data.data.current_condition[0].weatherDesc[0].value + "</p>"
      pic.innerHTML = "<img src='" + data.data.current_condition[0].weatherIconUrl[0].value + "'/>"
    });
  })
