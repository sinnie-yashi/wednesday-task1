var counter = 0;

function person(id, name, score, profile) {
  this.name = id,
  this.name = name,
  this.score = score,
  this.profile = "http://media.istockphoto.com/photos/male-silhouette-as-avatar-profile-picture-picture-id519078727?k=6&m=519078727&s=612x612&w=0&h=ptX9HZCoDQh3i5ZjC_j3HltiaeeJK-HfHrCa35Chx3M="
}

function getName(){
    let name= document.getElementById('textbox_id').value;
    if(!name) {
      prompt ('Please enter your name');
    }
}
