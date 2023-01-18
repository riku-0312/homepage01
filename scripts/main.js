const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/image02.jpg') {
    myImage.setAttribute('src','images/image01.jpg');
  } else {
    myImage.setAttribute('src','images/image02.jpg');
  }
}
