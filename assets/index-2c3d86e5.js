(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();var d="",i="",g=document.getElementById("lang").innerHTML,a=document.getElementsByClassName("check_select_view");for(let e=0;e<a.length;e++)a[e].onclick=()=>{a[e].parentElement.classList.toggle("check_select_opened")};document.getElementById("header_opener").onclick=()=>{document.getElementById("mobile_menu").classList.add("mobile_menu_opened")};document.getElementById("mobile_menu_closer").onclick=()=>{document.getElementById("mobile_menu").classList.remove("mobile_menu_opened")};document.getElementById("lang").onclick=()=>{document.getElementById("lang").classList.toggle("header_lang_opened")};var l=document.getElementsByClassName("check_select_view_element");for(let e=0;e<l.length;e++)l[e].onclick=()=>{l[e].parentElement.parentElement.parentElement.classList.remove("check_select_opened"),l[e].parentElement.parentElement.parentElement.getElementsByClassName("check_select_view_text")[0].innerHTML=l[e].innerHTML,l[e].parentElement.parentElement.parentElement.getElementsByClassName("check_select_view_text")[0].classList.add("black"),l[e].classList.contains("selected_exchange")&&(d=l[e],document.getElementById("selected_exchange").classList.remove("not_valid")),l[e].classList.contains("selected_currency")&&(i=l[e],document.getElementById("selected_currency").classList.remove("not_valid"))};var m=document.getElementsByClassName("faq_question");for(let e=0;e<m.length;e++)m[e].onclick=()=>{m[e].classList.toggle("faq_question_show")};var u=document.getElementsByClassName("mobile_menu_inner_nav_element");for(let e=0;e<u.length;e++)u[e].onclick=()=>{document.getElementById("mobile_menu").classList.remove("mobile_menu_opened")};document.getElementById("telegram").oninput=function(){document.getElementById("telegram").classList.remove("not_valid")};document.getElementById("check_btn").onclick=()=>{var e=!1;if(d||(e=!0,document.getElementById("selected_exchange").classList.add("not_valid")),i||(e=!0,document.getElementById("selected_currency").classList.add("not_valid")),document.getElementById("telegram").value||(e=!0,document.getElementById("telegram").classList.add("not_valid")),!e){document.getElementById("check_btn").innerHTML="SENDING REQUEST...";const o={selected_exchange:d,selected_currency:i,lang:g,passport:document.getElementById("passport").value,telegram:document.getElementById("telegram").value};var c="";fetch(c,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(o)}).then(s=>{document.getElementById("modal_success").classList.add("modal_success_show")}).catch(s=>{document.getElementById("check_btn").innerHTML="Something went wrong"})}};