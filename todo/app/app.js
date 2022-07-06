const input = document.querySelector("#add");

const btn = document.querySelector("#btn");

const list = document.querySelector("#list");

var el = document.getElementsByTagName('li');


// this function will allow us to add elements when we click the button

btn.onclick = function () {



    var x = input.value;

    if (x == '') {

        alert('you must write something');

    } else {

        li = document.createElement('li');

        li.innerHTML = x;

        list.insertBefore(li, list.childNodes[0]);

        input.value = '';

    }



};


//this function will allow us to check the clicked elements

list.onclick = function (ev) {

    if (ev.target.tagName == 'LI') {

        ev.target.classList.toggle('checked');



    }

};


