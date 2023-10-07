import "./scss/index.scss";

var selected_exchange = ''
var selected_currency = ''
var lang = document.getElementById('lang').innerHTML

var selects = document.getElementsByClassName('check_select_view');

for (let i = 0; i < selects.length; i++) {
    selects[i].onclick = () => {
        selects[i].parentElement.classList.toggle('check_select_opened')
    }
}

document.getElementById('header_opener').onclick = () => {
    document.getElementById('mobile_menu').classList.add('mobile_menu_opened');
}

document.getElementById('mobile_menu_closer').onclick = () => {
    document.getElementById('mobile_menu').classList.remove('mobile_menu_opened');
}

document.getElementById('lang').onclick = () => {
    document.getElementById('lang').classList.toggle("header_lang_opened");
}



var selects_elements = document.getElementsByClassName('check_select_view_element')


for (let i = 0; i < selects_elements.length; i++) {
    selects_elements[i].onclick = () => {
        selects_elements[i].parentElement.parentElement.parentElement.classList.remove('check_select_opened')

        selects_elements[i].parentElement.parentElement.parentElement.getElementsByClassName('check_select_view_text')[0].innerHTML = selects_elements[i].innerHTML

        selects_elements[i].parentElement.parentElement.parentElement.getElementsByClassName('check_select_view_text')[0].classList.add('black')

        if (selects_elements[i].classList.contains('selected_exchange')) {
            selected_exchange = selects_elements[i]
            document.getElementById('selected_exchange').classList.remove('not_valid');
        }
        if (selects_elements[i].classList.contains('selected_currency')) {
            selected_currency = selects_elements[i]
            document.getElementById('selected_currency').classList.remove('not_valid');
        }
    }
}

var faqs = document.getElementsByClassName('faq_question')

for (let i = 0; i < faqs.length; i++) {
    faqs[i].onclick = () => {
        faqs[i].classList.toggle('faq_question_show')
    }
}
var mobLinks = document.getElementsByClassName('mobile_menu_inner_nav_element')

for (let i = 0; i < mobLinks.length; i++) {
    mobLinks[i].onclick = () => {
        document.getElementById('mobile_menu').classList.remove('mobile_menu_opened');
    }
}




document.getElementById('telegram').oninput = function () {
    document.getElementById('telegram').classList.remove('not_valid');
}


document.getElementById('check_btn').onclick = () => {
    var validateError = false
    if (!selected_exchange) {
        validateError = true
        document.getElementById('selected_exchange').classList.add('not_valid');
    }
    if (!selected_currency) {
        validateError = true
        document.getElementById('selected_currency').classList.add('not_valid');
    }
    if (!document.getElementById('telegram').value) {
        validateError = true;
        document.getElementById('telegram').classList.add('not_valid');
    }

    if (!validateError) {
        document.getElementById('check_btn').innerHTML = "SENDING REQUEST...";
        const data = {
            selected_exchange,
            selected_currency,
            lang,
            passport: document.getElementById('passport').value,
            telegram: document.getElementById('telegram').value
        }
        var url = ""

        fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then((res) => {
            document.getElementById('modal_success').classList.add('modal_success_show');
        }).catch((e) => {
            document.getElementById('check_btn').innerHTML = "Something went wrong";
        })
    }

}
