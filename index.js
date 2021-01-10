console.log("This is my index.js");
//Data is an array of obects which information about the candidates
const data = [
    {
      name: 'Riya Desai',
      age: 21,
      city: 'kolkata',
      language: 'python',
      framework: 'Django',
      image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },

    {
        name: 'Neha Sharma',
        age: 25,
        city: 'Bangalore',
        language: 'javascript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/87.jpg'
      },

      {
        name: 'Rohit Sein',
        age: 27,
        city: 'Mumbai',
        language: 'python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
      },

      {
        name: 'Dev Saxena',
        age: 35,
        city: 'Delhi',
        language: 'Go',
        framework: 'Go framework',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
      },

      {
        name: 'Ram Kumar',
        age: 37,
        city: 'Jhansi',
        language: 'Javascript',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/99.jpg'
      }
]

//cv iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);
nextCV();
//button listner for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);
 
function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
</ul>`
}
else{
  alert('End of candidate applications');
  window.location.reload();
}
}