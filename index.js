function hokuyaScripter() {
  
  var head = document.getElementsByTagName('head').item(0);
  var scriptOne = document.createElement('script');
  scriptOne.setAttribute('type', 'text/javascript');
  scriptOne.setAttribute('src', './js/common_func.js');
  var scriptTwo = document.createElement('script');
  scriptTwo.setAttribute('type', 'text/javascript');
  scriptTwo.setAttribute('src', './js/validate.js');
  var scriptThree = document.createElement('script');
  scriptThree.setAttribute('type', 'text/javascript');
  scriptThree.setAttribute('src', './js/common_scripts.min.js');

  head.appendChild(scriptOne);
  head.appendChild(scriptTwo);
  head.appendChild(scriptThree);
}