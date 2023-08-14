//Trigger clicks for top options on page
const home = document.getElementById('Home');
const projects = document.getElementById('Projects');
const publications = document.getElementById('Publications')
const resume = document.getElementById('Resume')

home.addEventListener('click', () => {
    alert('You clicked home!');
    window.open("https://nkaur15.github.io/Home")
});

projects.addEventListener('click', () => {
    alert('You clicked projects!');
});

publications.addEventListener('click', () => {
    alert('You clicked publications!');
});

resume.addEventListener('click', () => {
    alert('You clicked resume!');
});