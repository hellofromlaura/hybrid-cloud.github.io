AOS.init({once: true});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const box1 = document.querySelector('#animate-stats1');
const box2 = document.querySelector('#animate-stats2');
const box3 = document.querySelector('#animate-stats3');

var bar1 = new ProgressBar.Circle(circle1, {
  strokeWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  color: '#11BAE9',
  trailColor: '#E2E2E2',
  trailWidth: 8,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});


var bar2 = new ProgressBar.Circle(circle2, {
  strokeWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  color: '#F8A919',
  trailColor: '#E2E2E2',
  trailWidth: 8,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});


var bar3 = new ProgressBar.Circle(circle3, {
  strokeWidth: 8,
  easing: 'easeInOut',
  duration: 1400,
  color: '#6ABD4A',
  trailColor: '#E2E2E2',
  trailWidth: 8,
  svgStyle: null,
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

document.addEventListener('scroll', function () {
  if (isInViewport(box1)) {
    bar1.animate(0.42);  // Number from 0.0 to 1.0
  }
  if (isInViewport(box2)) {
    bar2.animate(0.79);  // Number from 0.0 to 1.0
  }
  if (isInViewport(box3)) {
    bar3.animate(0.53);  // Number from 0.0 to 1.0
  }
});