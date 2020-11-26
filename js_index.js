var working = false;
$(".login").on("submit", function (e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find("button > .state");
  $this.addClass("loading");
  $state.html("Authenticating");
  setTimeout(function () {
    $this.addClass("ok");
    $state.html("Welcome back!");
    setTimeout(function () {
        $(location).attr('href', 'http://uiabhi.github.io/dashboard.html')
    }, 4000);
  }, 3000);
});
