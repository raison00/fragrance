import $ from 'jquery';

export default class Feature {
  constructor() {
    this.example = 'example';

    /* Landing Page Carousel */
    this.slideIndex = [1, 1, 1];
    this.slideId = ['mySlides1', 'mySlides2', 'mySlides3'];

    const self = this;
    /* Landing Page Carousel */
    let currentFragrance = 0;

    self.showSlides(1, currentFragrance);

    /* Landing page fragrance wardrobe slide navigation */
    $('li.fragrance-type').click(function () {
      $('ul.fragrance-types').find('li.fragrance-type').removeClass('active');
      $(this).addClass('active');
      currentFragrance = $(this).data('fragrance-id');
      const currentFragranceName = $(this).data('fragrance-name');
      self.showSlides(1, currentFragrance);
      $('.fragrance-wardrobe').find('.fragrance-carousel-wrapper').removeClass('active');
      $('.fragrance-wardrobe').children(`.${currentFragranceName}`).addClass('active');
    });

    /* general slideshow navigation functions */
    $('a.less-intense').click(() => {
      self.plusSlides(-1, currentFragrance);
    });

    $('a.more-intense').click(() => {
      self.plusSlides(1, currentFragrance);
    });

    /* mobile info window functionality */
    $('span.hover').click(function () {
      $('div.top-ten').find('.info-popup').removeClass('top-ten-active');
      $('.top-ten span.coach').addClass('removeBackground');
      $('.top-ten span.versace').addClass('removeBackground');
      $(this).find('.info-popup').addClass('top-ten-active');
    });

    $('span.close').click((e) => {
      $('div.top-ten').find('.info-popup').removeClass('top-ten-active');
      $('div.top-ten').find('span.hover').removeClass('removeBackground');
      $('div.shop-by-scent').find('.info-popup').removeClass('top-ten-active');
      e.stopPropagation();
    });

    /* Adding active state to current page */
    const currentPage = $('.fragrance-destination-nav').data('page-num');
    if (currentPage) {
      $(`li.${currentPage} a`).addClass('fgd-active-page');
    }

    /* Menu click functions */
    $('.fragrance-destination-nav').on('click', (e) => {
      $('ul.fgd-centered').addClass('showNav');
      e.stopPropagation();
    });

    $('.fragrance-destination-container').on('click', (e) => {
      $('.fragrance-destination-nav.fd-mobile ul.fgd-centered').removeClass('showNav');
      e.stopPropagation();
    });

    /* quiz display */
    $('.fg-p-quiz-for-him').click(() => {
      self.showSlides(1, 1);
      currentFragrance = 1;
    });

    $('.fg-p-quiz-for-her').click(() => {
      self.showSlides(1, 0);
      currentFragrance = 0;
    });

    /* Clickable dots */
    $('div.clickable-dots.one').click(() => {
      self.showSlides(0, 0);
      self.getDotsActiveState(1);
    });

    $('div.clickable-dots.two').click(() => {
      self.clickedDotTwo(this.slideIndex[0]);
      self.getDotsActiveState(2);
    });

    $('div.clickable-dots.three').click(() => {
      self.clickedDotThree(this.slideIndex[0]);
      self.getDotsActiveState(3);
    });

    $('div.clickable-dots.four').click(() => {
      self.clickedDotFour(this.slideIndex[0]);
      self.getDotsActiveState(4);
    });

    $('div.clickable-dots.five').click(() => {
      self.clickedDotFive(this.slideIndex[0]);
      self.getDotsActiveState(5);
    });

    $('div.results-button').click(() => {
      if ($('.quiz-result-citrus').css('display') === 'block') {
        document.querySelector("meta[property='og:image']").setAttribute('content', 'https://assets.macys.com/dyn_img/creativepages/citrus_social_share.jpg');
      } else if ($('.quiz-result-spicy').css('display') === 'block') {
        document.querySelector("meta[property='og:image']").setAttribute('content', 'https://assets.macys.com/dyn_img/creativepages/spicy_social_share.jpg');
      } else if ($('.quiz-result-sweet').css('display') === 'block') {
        document.querySelector("meta[property='og:image']").setAttribute('content', 'https://assets.macys.com/dyn_img/creativepages/sweet_social_share.jpg');
      } else if ($('.quiz-result-fresh').css('display') === 'block') {
        document.querySelector("meta[property='og:image']").setAttribute('content', 'https://assets.macys.com/dyn_img/creativepages/fresh_social_share.jpg');
      } else if ($('.quiz-result-woodsy').css('display') === 'block') {
        document.querySelector("meta[property='og:image']").setAttribute('content', 'https://assets.macys.com/dyn_img/creativepages/woodsy_social_share.jpg');
      } else if ($('.quiz-result-floral').css('display') === 'block') {
        document.querySelector("meta[property='og:image']").setAttribute('content', 'https://assets.macys.com/dyn_img/creativepages/floral_social_share.jpg');
      }
    });
  }

  init() {
    this.example = 'initialized';
  }

  getArrowState(n = null, x = null) {
    $('a.more-intense').css('background-image', 'url("https://assets.macys.com/dyn_img/creativepages/plus_sign.png")');
    $('a.less-intense').css('background-image', 'url("https://assets.macys.com/dyn_img/creativepages/minus_sign.png")');

    if (n === 0 || (n && x)) {
      if (n >= x.length) {
        $('a.more-intense').css('background-image', 'url("https://assets.macys.com/dyn_img/creativepages/plus_greyed_out_1536685690535.png")');
      }
      if (n <= 1) {
        $('a.less-intense').css('background-image', 'url("https://assets.macys.com/dyn_img/creativepages/minus_greyed_out.png")');
      }
    }
  }

  showSlides(n, no) {
    let i;
    const slideCollection = document.getElementsByClassName(this.slideId[no]);
    if (n > slideCollection.length) {
      this.slideIndex[no] = slideCollection.length;
    }
    if (n < 1) {
      this.slideIndex[no] = 1;
    }
    for (i = 0; i < slideCollection.length; i++) {
      slideCollection[i].style.display = 'none';
    }

    if ($('a.more-intense').hasClass('quiz')) {
      this.checkQuizStatus(n, slideCollection);
    } else {
      if ($('a.more-intense').hasClass('facts')) {
        this.getDotsActiveState(n);
      }

      this.getArrowState(n, slideCollection);
    }

    if (slideCollection[this.slideIndex[no] - 1]) {
      slideCollection[this.slideIndex[no] - 1].style.display = 'block';
    }
  }

  checkQuizStatus(n, slideCollection) {
    $('a.more-intense.quiz').css('display', 'block');
    $('div.results-button').css('display', 'none');

    if (n >= slideCollection.length) {
      $('div.results-button').css('display', 'block');
      $('a.more-intense.quiz').css('display', 'none');
    }
  }

  plusSlides(n, no) {
    this.showSlides(this.slideIndex[no] += n, no);
  }

  getDotsActiveState(n) {
    $('ul.concentration-dots').find('.clickable-dots').removeClass('active');
    if (n === 1) {
      $('.clickable-dots.one').addClass('active');
    } else if (n === 2) {
      $('.clickable-dots.two').addClass('active');
    } else if (n === 3) {
      $('.clickable-dots.three').addClass('active');
    } else if (n === 4) {
      $('.clickable-dots.four').addClass('active');
    } else if (n === 5) {
      $('.clickable-dots.five').addClass('active');
    }
  }

  clickedDotTwo(currentSlide) {
    if (currentSlide === 1) {
      this.plusSlides(1, 0);
    } else if (currentSlide === 3) {
      this.plusSlides(-1, 0);
    } else if (currentSlide === 4) {
      this.plusSlides(-2, 0);
    } else if (currentSlide === 5) {
      this.plusSlides(-3, 0);
    }
  }

  clickedDotThree(currentSlide) {
    if (currentSlide === 1) {
      this.plusSlides(2, 0);
    } else if (currentSlide === 2) {
      this.plusSlides(1, 0);
    } else if (currentSlide === 4) {
      this.plusSlides(-1, 0);
    } else if (currentSlide === 5) {
      this.plusSlides(-2, 0);
    }
  }

  clickedDotFour(currentSlide) {
    if (currentSlide === 1) {
      this.plusSlides(3, 0);
    } else if (currentSlide === 2) {
      this.plusSlides(2, 0);
    } else if (currentSlide === 3) {
      this.plusSlides(1, 0);
    } else if (currentSlide === 5) {
      this.plusSlides(-1, 0);
    }
  }

  clickedDotFive(currentSlide) {
    if (currentSlide === 1) {
      this.plusSlides(4, 0);
    } else if (currentSlide === 2) {
      this.plusSlides(3, 0);
    } else if (currentSlide === 3) {
      this.plusSlides(2, 0);
    } else if (currentSlide === 4) {
      this.plusSlides(1, 0);
    }
  }
}
