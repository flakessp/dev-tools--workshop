document.body.addEventListener('mousemove', function (e) {
  this.style.setProperty('--x', e.clientX);
  this.style.setProperty('--y', e.clientY);
});
document.body.addEventListener('touchmove', function (e) {
  this.style.setProperty('--x', e.touches[0].clientX);
  this.style.setProperty('--y', e.touches[0].clientY);
});