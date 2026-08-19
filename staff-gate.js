(function(){
  var token = sessionStorage.getItem('gevlon_staff_token');
  var expiry = sessionStorage.getItem('gevlon_staff_expiry');
  var valid = token && expiry && Date.now() < Number(expiry);

  if(!valid){
    sessionStorage.removeItem('gevlon_staff_token');
    sessionStorage.removeItem('gevlon_staff_expiry');
    var redirect = encodeURIComponent(window.location.href);
    window.location.href = 'acces-praticien.html?redirect=' + redirect;
  }
})();
