let video = [
    {id: '1', url: 'https://www.youtube.com/embed/IJremOTYSgg', name: 'Vito Scaletty'},
    {id: '2', url: 'https://www.youtube.com/embed/pK4Bol4DMTQ', name: 'Pizza'},
    {id: '3', url:"https://www.youtube.com/embed/NWl_Nq7OTUI"}
    
]



let selectedButton;
let videoframe = document.getElementById("videoframe")
let button = document.querySelector(".buttons")
let titleVideo = document.querySelector('.titleVideo')

button.onclick = function(event) {

let buttonItem = event.target.closest('button');
if(!buttonItem) return;
if(!button.contains(buttonItem)) return;
callAlert(buttonItem)
}

function callAlert(buttonItem) {

if(selectedButton) {
  selectedButton.classList.remove('highlight')
}
selectedButton = buttonItem
/*        titleVideo.textContent = ''
selectedButton.classList.add('highlight')
elem = document.createTextNode(selectedButton.textContent)

titleVideo.appendChild(elem)
console.log(selectedButton.textContent) */
/*  let html = document.createElement('div') */
let html = "<iframe width=\"640\" height=\"480\" src=" + video[selectedButton.dataset.counter].url + "?autoplay=1&mute=1&controls=0&modestbranding=0&fs=0&disablekb=1" + "frameborder=\"0\" allow=\"accelerometer; autoplay=1;controls=0; rel=0 \" ></iframe>"

videoframe.innerHTML = html

}