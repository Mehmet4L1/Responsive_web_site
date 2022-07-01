/*HTML etiketlerine ulaşmamız gerekiyor. Bunu da class ve id lerle yaparız*/
const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buton
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

/*Search-form u active yapıyoruz*/
searchBtn.addEventListener("click",function() {
    searchForm.classList.toggle("active"); /*1 kere tıkladığımda search-formun class larına "active" ekle. (toggle) kullanıyoruz ,açıkken tıkladığımızda ise kapatması için */

    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ){
        searchForm.classList.remove("active");   
        }
    }) /*eğer tıkladığımız yerde searchBtn ve(&&)searchForm yoksa ,searchFormu pasif yap(boş bir yere tıklarsak pasif yap)*/
})

/* Cart-btn i active yapıyoruz*/
cartBtn.addEventListener("click",function() {
    cartItem.classList.toggle("active");

    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(cartItem)
        ){
        cartItem.classList.remove("active");   
        }
    }) /*eğer tıkladığımız yerde cartBtn ve(&&) cartItem yoksa ,searchFormu pasif yap(boş bir yere tıklarsak pasif yap)*/
})
menuBtn.addEventListener("click",function() {
    navbar.classList.toggle("active");

    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
        ){
        navbar.classList.remove("active");   
        }
    }) /*eğer tıkladığımız yerde menuBtn ve(&&) navbar yoksa ,searchFormu pasif yap(boş bir yere tıklarsak pasif yap)*/
})




