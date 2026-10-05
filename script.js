function changeWallColor(hexColor, colorTitle) {
  const roomWall = document.getElementById('roomWall');
  const colorName = document.getElementById('colorName');
  
  roomWall.style.backgroundColor = hexColor;
  colorName.innerHTML = 'Selected Color: <strong>' + colorTitle + '</strong>';
}