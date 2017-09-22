var counter = 1;
var persons=[];
function Person(id, name, score, profile) {
  this.id = id,
  this.name = name,
  this.score = score,
  this.profile = "";
}

function getName(){

    let name= document.getElementById('txtName').value;
    if(!name) {
      prompt ('Error! Please enter your name');
    }
    else {
      return name;
    }
}

function setScore() {
  var score = Math.random(1) * 10;
    score=score.toFixed(2); //to round off to 2 decimal places
}

function sortByScore() {
  person.sort(function(a,b){
    return a.score-b.score;
  });
}

function sortById() {
  person.sort(function(a,b){
    return a.id - b.id;
  });
}

function addPlayer() {
  let id=counter;
  let name=getName();
  let score=0;
  let profile="http://media.istockphoto.com/photos/male-silhouette-as-avatar-profile-picture-picture-id519078727?k=6&m=519078727&s=612x612&w=0&h=ptX9HZCoDQh3i5ZjC_j3HltiaeeJK-HfHrCa35Chx3M=";
  var person=new Person(id,name,score,profile);
  persons.push(person);
    counter++;
  }

  //to keep track of the infor
  persons.map(function(Person){
    Person.setScore;

  })
