var errors = document.getElementById('errors');
var form = document.getElementById('contact');
var required = Array.prototype.slice.call(form.querySelectorAll('[required]'));

//form.addEventListener('blur', function (e) {

//    if (e.target.hasAttribute('required')) {
//        validate(e.target);
//    }

//}, true);

//form.addEventListener('submit', function (e) {
//    e.preventDefault();
//    var invalid = [];

//    required.forEach(function (field) {

//        if (validate(field)) {
//            invalid.push(field);
//        }
//    });

//    if (invalid.length) {
//        var list = '<h2>Errors</h2><ol id="error-list">';

//        invalid.forEach(function (field) {
//            list += '<li><a href="#' + field.id + '">' +
//                field.previousElementSibling.querySelector('.error-message')
//                .textContent + '</a></li>';
//        });

//        list += '</ol>';

//        errors.innerHTML = list;
//        errors.focus();
//    } else {
//        errors.innerHTML = '';
//    }
//});

//function ready(func) {
//    document.addEventListener("DOMContentLoaded", func);
//}

//ready(() => {
//    bindBadFormSubmit();
//});


//function bindBadFormSubmit() {
//    $('#badForm').click(function() {
//        validate();
//    });
//}

$(function () {
    $("#badForm").submit(function (event) {
        event.preventDefault();
        validate();
    });
});

function validate() {
    var firstName = document.forms["badForm"]["fname"].value;
    var surName = document.forms["badForm"]["sname"].value;
    var emailAddress = document.forms["badForm"]["email"].value;

    var valid = true;

    if (firstName === "") {
        document.forms["badForm"]["fname"].classList.add("invalid");
        document.forms["badForm"].event.preventDefault();
        valid = false;
    }

    if (surName === "") {
        document.forms["badForm"]["sname"].classList.add("invalid");
        document.forms["badForm"].event.preventDefault();
        valid = false;
    }

    if (emailAddress === "") {
        document.forms["badForm"]["email"].classList.add("invalid");
        document.forms["badForm"].event.preventDefault();
        valid = false;
    }

    return valid;
}