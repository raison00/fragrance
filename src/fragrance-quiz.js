import $ from 'jquery';

const fragranceQuiz = {

  pickAnswer: ($answer, $answers) => {
    $answers.find('.quiz-answer').removeClass('active');
    $answer.addClass('active');
  },

  calcResult: () => {
    const weightArray = [0, 0, 0, 0, 0, 0];
    let quizResult = 0;
    let ulContainer = '';

    if ($('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-him').css('display') === 'block') {
      ulContainer = 'ul[data-quiz-question-his]';
    } else {
      ulContainer = 'ul[data-quiz-question]';
    }

    $(ulContainer).each(function (i) {
      if (i < 5) {
        // console.log(`i = ${i}`);
        const $this = $(this);
        const chosenAnswer = $this.find('.quiz-answer.active').data('quiz-answer');

        const splitAnswer = chosenAnswer.split('-');
        weightArray[splitAnswer[0] - 1] = parseInt(weightArray[splitAnswer[0] - 1], 10) + parseInt(splitAnswer[1], 10);
        // console.log(`array = ${weightArray.toString()}`);
        // console.log(`question = ${splitAnswer[0]} ${splitAnswer[1]} ${i}`);
      }
    });

    quizResult = weightArray.indexOf(Math.max(...weightArray)) + 1;
    // console.log(`array = ${weightArray.toString()}`);
    // console.log(`Result = ${quizResult}`);

    return quizResult;
  },

  isComplete: () => {
    let answersComplete = 0;
    let ulContainer = '';

    if ($('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-him').css('display') === 'block') {
      ulContainer = 'ul[data-quiz-question-his]';
    } else {
      ulContainer = 'ul[data-quiz-question]';
    }

    $(ulContainer).each(function () {
      if ($(this).find('.quiz-answer.active').length) {
        answersComplete += 1;
      }
    });
    return answersComplete;
  },

  showResult: (result) => {
    $('.fg-quiz-container .fg-quiz-main-content').css('display', 'none');

    switch (result) {
      case 1:
        $('.fg-results-container .fg-quiz-row-two .quiz-result-citrus').css('display', 'block');
        break;
      case 2:
        $('.fg-results-container .fg-quiz-row-two .quiz-result-spicy').css('display', 'block');
        break;
      case 3:
        $('.fg-results-container .fg-quiz-row-two .quiz-result-sweet').css('display', 'block');
        break;
      case 4:
        $('.fg-results-container .fg-quiz-row-two .quiz-result-fresh').css('display', 'block');
        break;
      case 5:
        $('.fg-results-container .fg-quiz-row-two .quiz-result-woodsy').css('display', 'block');
        break;
      case 6:
        $('.fg-results-container .fg-quiz-row-two .quiz-result-floral').css('display', 'block');
        break;
      default:
        $('.fg-results-container .fg-quiz-row-two .quiz-result-floral').css('display', 'block');
        break;
    }
    $('.fg-quiz-container .fg-results-container').css('display', 'block');
    // console.log(`last = ${result}`);
  },

  start: () => {
    $(document).ready(() => {
      let totalAnswers = 0;

      $('.quiz-answer').on('click', function () {
        const $this = $(this);
        let $answers;

        if ($('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-him').css('display') === 'block') {
          $answers = $this.closest('ul[data-quiz-question-his]');
        } else {
          $answers = $this.closest('ul[data-quiz-question]');
        }
        // const $answers = $this.closest('ul[data-quiz-question]');
        // console.log(`answer = ${$answers}`);
        fragranceQuiz.pickAnswer($this, $answers);
        totalAnswers = fragranceQuiz.isComplete();
        // console.log(`isComplete = ${totalAnswers}`);
      });


      $('.fg-quiz-questions .results-button button').click(() => {
        // console.log(`total = ${totalAnswers}`);
        if (totalAnswers >= 5) {
          fragranceQuiz.showResult(fragranceQuiz.calcResult());
        } else {
          $('.fg-quiz-questions .results-button span').css('display', 'block');
        }
      });
    });
  },

  /*
   *
   * UI display code
   *
   */
  uiQuery: () => {
    $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-row-two p').click(() => {
      $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-row-two p').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-row-two .fg-p-quiz-for-her').click(() => {
      $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-her').css('display', 'block');
      $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-him').css('display', 'none');
    });

    $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-row-two .fg-p-quiz-for-him').click(() => {
      $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-him').css('display', 'block');
      $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-her').css('display', 'none');
    });

    $('.fg-quiz-questions .question-one-women .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-one-women .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-two-women .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-two-women .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-three-women .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-three-women .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-four-women .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-four-women .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-five-women .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-five-women .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-one-men .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-one-men .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-two-men .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-two-men .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-three-men .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-three-men .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-four-men .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-four-men .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });

    $('.fg-quiz-questions .question-five-men .fg-quiz-question-answers-row img').click(function () {
      $('.fg-quiz-questions .question-five-men .fg-quiz-question-answers-row img').removeClass('active');
      $(this).addClass('active');
    });
  },
};

export default fragranceQuiz;
fragranceQuiz.start();
fragranceQuiz.uiQuery();
