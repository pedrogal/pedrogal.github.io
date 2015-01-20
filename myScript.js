var myVar = undefined;
function startMovement(){
    if(typeof myVar !== 'undefined')
    clearInterval(myVar);
    myVar = setInterval(function(){changeImage()}, 1000);
    myVar = setInterval()
}

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("peserio")) {
      image.src = "images/peloco.gif";
    } else {
      image.src = "images/peserio.gif";
    }
}

function iframeDisplayChange( strUrl ){
  var myFrame = document.getElementById('HTMLDisplayer');
  myFrame.src = strUrl;
  myFrame.onload();
}

function setIframeHeight(iframe) {
  if (iframe) {
    var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
    if (iframeWin.document.body) {
      iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
    }
  }
};

function paint( sender ){
  var a_elements = sender.parentNode.parentNode.getElementsByTagName("a");

  for (var i = 0, len = a_elements.length; i < len; i++ ) {
    a_elements[ i ].style.color = 'blue';
    a_elements[ i ].style.backgroundColor = '#FFFFFF';
  }
  sender.style.color = '#FFFFFF';
  sender.style.backgroundColor = '#000000';

}
