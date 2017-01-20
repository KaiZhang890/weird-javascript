var g = KZ('Calle', 'Zhang');

g.greet().setLang('zh').greet(true).log();

$('#login').click(function() {
  $('#logindiv').hide();
  g.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
