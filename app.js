/**
   * Entry point for running the application.
   * Must export an object with a start() method.
   *
   * Since this is a feature, the entry point is only used for running it in isolation.
   * When consumed by a page, the entry point will be defined by the consumer.
   */
import $ from 'jquery';
import 'slick-carousel';
// import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import '@core/vendor/radio.shim'; // shim app.channel
import Example from './src/fragrance-guide';
import './src/fragrance-quiz';
import './src/scss/fragrance-guide.scss';
import './src/scss/fragrance-facts.scss';
import './src/scss/fragrance-quiz.scss';
import './src/scss/trending-now.scss';

const PageApp = new Marionette.Application();

PageApp.getMeta = () => null;

PageApp.on('start', () => {
  // if (Backbone.history) {
  PageApp.Feature = new Example();


  const mainObject = $('#main');
  if (mainObject.length > 0) {
    console.log('page app:', PageApp.Feature);
    PageApp.Feature.init();
  }
  // }
});

export default PageApp;

$(document).ready(() => {
  $('.fg-tn-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    infinite: true,
    speed: 300,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          autoplay: false,
          autoplaySpeed: 0,
          arrows: false,
          dots: true,
          infinite: true,
          swipe: true,
          speed: 300,
        },
      },
    ],
  });

  $('.my-slides').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    cssEase: 'linear',
    adaptiveHeight: true,
  });
});
