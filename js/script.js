/* JavaScript код */
'use strict';

const buttonThemeLight = document.querySelector(".theme-button-light");
const buttonThemeDark = document.querySelector(".theme-button-dark");
const buttonThemeTexture = document.querySelector(".theme-button-texture");
const buttonCardViewTile = document.querySelector(".card-view-button-tile");
const buttonCardViewSrandard = document.querySelector(".card-view-button-standard");
const buttonCardViewCompact = document.querySelector(".card-view-button-compact");
const courses = document.querySelector(".cards");

const buttonCardViewTileHandler = () => {
  courses.classList.remove("standard");
  courses.classList.remove("compact");
  courses.classList.add("tile");
};

const buttonCardViewStandardHandler = () => {
  courses.classList.remove("tile");
  courses.classList.remove("compact");
  courses.classList.add("standard");
};

const buttonCardViewCompactHandler = () => {
  courses.classList.remove("standard");
  courses.classList.remove("tile");
  courses.classList.add("compact");
};

const buttonThemeLightHandler = () => {
  document.documentElement.dataset['themeName'] = 'light';
};

const buttonThemeDarkHandler = () => {
  document.documentElement.dataset['themeName'] = 'dark';
};

const buttonThemeTextureHandler = () => {
  document.documentElement.dataset['themeName'] = 'texture';
};

const init = () => {
  buttonCardViewTile.addEventListener("click", buttonCardViewTileHandler);
  buttonCardViewSrandard.addEventListener("click", buttonCardViewStandardHandler);
  buttonCardViewCompact.addEventListener("click", buttonCardViewCompactHandler);

  buttonThemeLight.addEventListener("click", buttonThemeLightHandler);
  buttonThemeDark.addEventListener("click", buttonThemeDarkHandler);
  buttonThemeTexture.addEventListener("click", buttonThemeTextureHandler);
};

init();







