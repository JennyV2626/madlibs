var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  })
})

module.exports = router;

function generateRandomColor(){
  let hexCode = "#"
  while(hexCode.length < 7){
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

function getStory(formData) {
  if(formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `This weekend my family and I are going to ${formData.place1}. I'm going to bring along my ${formData.noun1}. It is going to be a ${formData.adjective1} day. I hope that we will see
  ${formData.adjective2} ${formData.noun2} ${formData.verb1}. When we get back home, I'm going to ${formData.verb2}.`
}

function generateStory2(formData){
  return `Once upon a time, there was a ${formData.adjective1} dinosaur that lived at the ${formData.place1}. The dinosaur was emotional because it lost its ${formData.adjective2} ${formData.noun1}.
  Because of that, it began to ${formData.verb1} and ${formData.verb2}  around the ${formData.place1}. When it found a new ${formData.noun2}, it felt happy again.`
}

function generateStory3(formData){
  return `One ${formData.adjective1} and spooky night, my friend and I went into a not-so ${formData.adjective2} haunted house. We've seen a bunch of ${formData.noun1} and ${formData.noun2} which seemed to 
  float and move around the house itself. Seeing that made us ${formData.verb1} and ${formData.verb2} all around the house. Once we've exited the haunted house, we've promised to never come there again. We'll go to 
  the ${formData.place1} instead.`
}