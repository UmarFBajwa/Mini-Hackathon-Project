function analyzeTone(str){
  var ajaxRequest = $.ajax({
      url: "https://sentimail-api.herokuapp.com/tone",
      method: "POST",
      data: {content: str},
      });

    ajaxRequest.done(createToneChart);
    ajaxRequest.done(createEmotionChart);
    ajaxRequest.fail(function(){
      console.log("Ajax call failed");
    });
}
