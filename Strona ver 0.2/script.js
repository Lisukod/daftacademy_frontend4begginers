//Switch Buy Ticket button

function replace(e){
    const replaceText = document.createElement('span');
    replaceText.innerHTML = 'Have fun!';
    let el = document.getElementById("id_"+e);
    el.removeChild(el.lastElementChild);
    el.appendChild(replaceText).cloneNode(true);
}

//Submit Formularza
function submit_to_log(){
    let email = document.getElementById('email').value;
    let topic = document.getElementById('topic').value;
    console.log("Email: " + email + " \n Topic: " + topic);
}

document.getElementById("form_id").addEventListener('submit', function(evt){
    evt.preventDefault();
    submit_to_log();
})

//Menu

const menuScroller = document.querySelector('#menuScroller');
const myScroll = document.querySelector('#navigation_items_id');

menuScroller.addEventListener('click', () => {
    myScroll.classList.toggle('showUpClass');
})