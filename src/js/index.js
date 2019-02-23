import 'babel-polyfill';
import _ from 'lodash';
import $ from 'jquery';
import './../sass/styles.scss';

window.$ = $;

$('#menu').on('click', function () {
    $('#show_menu').toggle();
});

let namePerson = document.getElementById('person_cart');
namePerson.onkeypress = (event) => !/[a-z]/i.test(event.key) ? false : true;

document.getElementById("formPay").onsubmit = () => {

    let onePart = document.getElementById('onePartCart');
    let twoPart = document.getElementById('twoPartCart');
    let threePart = document.getElementById('threePartCart');
    let fourPart = document.getElementById('fourPartCart');

    if(onePart.value == '' || onePart.value.length !== 4 ){
        onePart.style.borderColor = "red";
        return false;
    }
    else if(twoPart.value == '' || twoPart.value.length !== 4 ){
        twoPart.style.borderColor = "red";
        return false;
    }
    else if(threePart.value == '' || threePart.value.length !== 4 ){
        threePart.style.borderColor = "red";
        return false;
    }
    else if(fourPart.value == '' || fourPart.value.length !== 4 ){
        fourPart.style.borderColor = "red";
        return false;
    }
    else if( document.getElementById('cvv').value == '' || document.getElementById('cvv').value.length !== 3){
        document.getElementById('cvv').style.borderColor = "red";
        return false;
    }
    else if(document.getElementById('person_cart').value =="" || document.getElementById('person_cart').value.length < 4 ){
        document.getElementById('person_cart').style.borderColor = "red";
        return false;
    }
    else {
        checkForm();
    }
};

const checkForm = () => {
    alert("Ваша форма отправлена");
}
