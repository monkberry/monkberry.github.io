"use strict";
import hljs from './highlight.js/index';
import example from './example/example';

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(animateStars, 500);
  getLatestReleaseVersion();
  highlightCodeBlocks();
  initExample();
});

window.addEventListener('resize', () => {
  animateStars();
});

function showIntro() {
  const intro = document.querySelector('.js-intro');
  if (intro) {
    intro.classList.add('-visible');
  }
}

function animateStars() {
  const stars = document.querySelector('.js-stars');
  if (stars) {
    let body = document.body, html = document.documentElement;
    let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    stars.style.height = height + 'px';
    stars.classList.add('-visible');
  }

  setTimeout(showIntro, 700);
}

function getLatestReleaseVersion() {
  const version = document.querySelector('.js-version');
  if (version) {
    fetch('https://api.github.com/repos/monkberry/monkberry/tags')
      .then(response => response.json())
      .then(data => version.textContent = 'v' + data[0].name);
  }
}

function highlightCodeBlocks() {
  const blocks = document.querySelectorAll('pre code');
  for (let i = 0; i < blocks.length; i++) {
    hljs.highlightBlock(blocks[i]);
  }
}

function initExample() {
  const result = document.querySelector('.js-result');
  if(result) {
    example(result);
  }
}
