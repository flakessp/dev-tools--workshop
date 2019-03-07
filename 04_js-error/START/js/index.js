document.body.addEventListener('mousemove', function (e) {
  this.styl.setProperty('--x', e.clientX);
  this.style.setProperty('--y', e.clientY);
});