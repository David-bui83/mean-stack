$(document).ready(function(){
  function rand(arr) {
    var ran = Math.floor(Math.random() * 4)
    var newArr = arr
    for(var i = 0; i < ran/2; i++){
      var temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
    return newArr
  }
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple', 
    method: 'GET',
    data: JSON
  }).then(function(req, res){
    $("#header").text(`Trivia Night - ${req.results[0].category}`)

    console.log(req)
    var score = 0
    for(var i = 0; i < req.results.length;i++){
      var anArr = []
      var an = req.results[i].correct_answer
      anArr.push(an)
      var al = req.results[i].incorrect_answers
      // console.log(al)
      for(var j = 0; j < al.length; j++){
        // console.log(al[j])
        anArr.push(al[j])
      }
      // console.log('adsfasfasdf')
      // console.log(anArr)
      
      var newL = rand(anArr)

      let html = `
      <div class="jumbotron">
        <h3>${req.results[i].question}</h3>
         <ul style="list-style:none">
          <li><button class="btn" value="${newL[0]}" at="${req.results[i].correct_answer}">${newL[0]}</button></li>
          <li><button class="btn" value="${newL[1]}" at="${req.results[i].correct_answer}">${newL[1]}</button></li>
          <li><button class="btn" value="${newL[2]}" at="${req.results[i].correct_answer}">${newL[2]}</button></li>
          <li><button class="btn" value="${newL[3]}" at="${req.results[i].correct_answer}">${newL[3]}</button></li>
         <ul>
      </div>
      `
      $('#jumbo').append(html)
    }

    $(".btn").click(function(){
      
      var val = $(this).val()
      var c = $(this).attr('at')
      $(this).attr('disabled', true)
      if(val == c){
        $(this).addClass('correct')
        score += 30
        $('.score').text("Score: " + score)
      }else{
        $(this).addClass('wrong')
      }
    })

  })

})