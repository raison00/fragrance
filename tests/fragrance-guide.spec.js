import $ from 'jquery';
import FragranceGuide from '../src/fragrance-guide';

describe('fragrance-guide', () => {
  let fragranceGuide;
  beforeEach(() => {
    loadFixtures('fragrance.html'); // fixtures/html/main.html becomes your DOM
  });

  describe('get arrow state', () => {
    it('should render greyed out sign on lowest slide number', (done) => {
      // loadFixtures('fragrance.html'); // fixtures/html/main.html becomes your DOM
      // $(document).ready(function(){
      fragranceGuide = new FragranceGuide();

      const slideOne = document.getElementsByClassName('mySlides1'); // collection of slide with classname slide1

      fragranceGuide.getArrowState(0, slideOne);

      done();
      // });

      expect($('<a class="less-intense"></a>')).toExist();
    });

    it('should render greyed out sign on highest slide number', (done) => {
      fragranceGuide = new FragranceGuide();


      const slideOne = document.getElementsByClassName('mySlides1'); // collection of slide with classname slide1

      fragranceGuide.getArrowState(2, slideOne);

      done();

      expect($('<a class="more-intense"></a>')).toExist();
    });
  });

  describe('dom events', () => {
    it('should change slide on click', (done) => {
      fragranceGuide = new FragranceGuide();
      done();
      $('li.fragrance-type').trigger('click');

      expect($('<a class="more-intense"></a>')).toExist();
    });

    it('should show decrement slide on click', (done) => {
      fragranceGuide = new FragranceGuide();

      $('div.fragrance-carousel-wrapper.sweet a.less-intense').trigger('click');
      done();

      expect($('<a class="more-intense"></a>')).toExist();
    });

    it('should close popup on exit button click', (done) => {
      fragranceGuide = new FragranceGuide();

      $('span.close').trigger('click');
      done();

      expect($('<a class="more-intense"></a>')).toExist();
    });

    it('should increment slide on click', (done) => {
      fragranceGuide = new FragranceGuide();

      $('a.more-intense').trigger('click');
      done();

      expect($('<a class="more-intense"></a>')).toExist();
    });

    it('should show popup on click', (done) => {
      fragranceGuide = new FragranceGuide();
      $('span.hover').trigger('click');
      done();

      expect($('<a class="more-intense"></a>')).toExist();
    });
  });

  describe('the mobile menu functionality', () => {
    it('should show nav on click if device is mobile or ipad', () => {
      fragranceGuide = new FragranceGuide();
      $('.fragrance-destination-nav').trigger('click');

      expect($('ul.fgd-centered')).toHaveClass('showNav');
    });

    it('should hide nav on click if device is mobile or ipad', () => {
      fragranceGuide = new FragranceGuide();

      $('.fragrance-destination-container').trigger('click');
      expect($('ul.fgd-centered')).toExist();
    });
  });

  describe('the quiz slideshow', () => {
    it('should show the quiz for him on click', () => {
      loadFixtures('quiz.html');
      fragranceGuide = new FragranceGuide();

      $('.fg-p-quiz-for-him').trigger('click');
    });

    it('should show the quiz for her on click', () => {
      loadFixtures('quiz.html');
      fragranceGuide = new FragranceGuide();

      $('.fg-p-quiz-for-her').trigger('click');
    });

    it('should display the results button if user is on last question', () => {
      fragranceGuide = new FragranceGuide();

      fragranceGuide.checkQuizStatus(0, 0);
    });

    it('should hide the results button if user is on last question', () => {
      fragranceGuide = new FragranceGuide();
      const myCollection = {
        length: 7,
      };
      fragranceGuide.checkQuizStatus(7, myCollection);
    });
  });

  describe('clickable dot functionality', () => {
    beforeEach(() => {
      loadFixtures('fragrance_facts.html'); // fixtures/html/main.html becomes your DOM
    });

    it('should show slide one on click of dot one', () => {
      fragranceGuide = new FragranceGuide();

      $('div.clickable-dots.one').trigger('click');
    });

    it('should show slide two on click of dot two', () => {
      fragranceGuide = new FragranceGuide();

      $('div.clickable-dots.two').trigger('click');
      fragranceGuide.clickedDotTwo(3);
      fragranceGuide.clickedDotTwo(4);
      fragranceGuide.clickedDotTwo(5);
    });

    it('should show slide three on click of dot three', () => {
      fragranceGuide = new FragranceGuide();

      $('div.clickable-dots.three').trigger('click');
      fragranceGuide.clickedDotThree(2);
      fragranceGuide.clickedDotThree(4);
      fragranceGuide.clickedDotThree(5);
    });


    it('should show slide four on click of dot four', () => {
      fragranceGuide = new FragranceGuide();

      $('div.clickable-dots.four').trigger('click');

      fragranceGuide.clickedDotFour(2);
      fragranceGuide.clickedDotFour(3);
      fragranceGuide.clickedDotFour(5);
    });

    it('should show slide five on click of dot five', () => {
      fragranceGuide = new FragranceGuide();

      $('div.clickable-dots.five').trigger('click');
      fragranceGuide.clickedDotFive(2);
      fragranceGuide.clickedDotFive(3);
      fragranceGuide.clickedDotFive(4);
    });
  });

  describe('social share image behavior', () => {
    beforeEach(() => {
      loadFixtures('quiz.html'); // fixtures/html/main.html becomes your DOM
    });

    it('should change social share image to citrus if result is citrus', () => {
      fragranceGuide = new FragranceGuide();

      $('div.results-button').trigger('click');
    });
  });
});
