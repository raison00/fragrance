import $ from 'jquery';
import FragranceQuiz from '../src/fragrance-quiz';

describe('Show Quiz for Fragrance', () => {
  beforeEach(() => {
    loadFixtures('quiz.html');
  });

  it('Should have active class', (done) => {
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    done();

    expect($('.quiz-answer.active')).toExist();
  });

  it('Should have error message displayed', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(4);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
    expect($('.fg-quiz-questions .results-button span').css('display', 'block')).toExist();
  });

  it('Should have called showResult with result floral(6)', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(5);
    const quizResult = spyOn(FragranceQuiz, 'calcResult').and.returnValue(6);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
    expect(quizResult).toHaveBeenCalled();
    expect($('.fg-results-container .fg-quiz-row-two .quiz-result-floral').css('display', 'block')).toExist();
  });

  it('Should have called showResult with result woodsy(5)', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(5);
    const quizResult = spyOn(FragranceQuiz, 'calcResult').and.returnValue(5);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
    expect(quizResult).toHaveBeenCalled();
    expect($('.fg-results-container .fg-quiz-row-two .quiz-result-woodsy').css('display', 'block')).toExist();
  });

  it('Should have called showResult with result fresh(4)', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(5);
    const quizResult = spyOn(FragranceQuiz, 'calcResult').and.returnValue(4);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
    expect(quizResult).toHaveBeenCalled();
    expect($('.fg-results-container .fg-quiz-row-two .quiz-result-fresh').css('display', 'block')).toExist();
  });

  it('Should have called showResult with result sweet(3)', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(5);
    const quizResult = spyOn(FragranceQuiz, 'calcResult').and.returnValue(3);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
    expect(quizResult).toHaveBeenCalled();
    expect($('.fg-results-container .fg-quiz-row-two .quiz-result-sweet').css('display', 'block')).toExist();
  });

  it('Should have called showResult with result spicy(2)', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(5);
    const quizResult = spyOn(FragranceQuiz, 'calcResult').and.returnValue(2);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
    expect(quizResult).toHaveBeenCalled();
    expect($('.fg-results-container .fg-quiz-row-two .quiz-result-spicy').css('display', 'block')).toExist();
  });

  it('Should have called showResult with result citrus(1)', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(5);
    const quizResult = spyOn(FragranceQuiz, 'calcResult').and.returnValue(1);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
    expect(quizResult).toHaveBeenCalled();
    expect($('.fg-results-container .fg-quiz-row-two .quiz-result-citrus').css('display', 'block')).toExist();
  });

  it('Should have called showResult with result floral(7) default case', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(5);
    const quizResult = spyOn(FragranceQuiz, 'calcResult').and.returnValue(7);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
    expect(quizResult).toHaveBeenCalled();
    expect($('.fg-results-container .fg-quiz-row-two .quiz-result-citrus').css('display', 'block')).toExist();
  });

  it('Should have called calcResult', (done) => {
    const totalAnswers = spyOn(FragranceQuiz, 'isComplete').and.returnValue(5);
    FragranceQuiz.start();

    $('.quiz-answer').trigger('click');
    $('.fg-quiz-questions .results-button button').trigger('click');
    done();

    expect(totalAnswers).toHaveBeenCalled();
  });

  it('Should have click on quiz for her', (done) => {
    FragranceQuiz.uiQuery();

    $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-row-two .fg-p-quiz-for-her').trigger('click');
    done();

    expect($('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-her').css('display', 'block')).toExist();
  });

  it('Should have click on quiz for him', (done) => {
    FragranceQuiz.uiQuery();

    $('.fg-quiz-container .fg-quiz-main-content .fg-quiz-row-two .fg-p-quiz-for-him').trigger('click');
    done();

    expect($('.fg-quiz-container .fg-quiz-main-content .fg-quiz-questions-for-him').css('display', 'block')).toExist();
  });

  it('Should have an active class on click', (done) => {
    FragranceQuiz.uiQuery();

    $('.fg-quiz-questions .question-one-women .fg-quiz-question-answers-row img').trigger('click');
    $('.fg-quiz-questions .question-two-women .fg-quiz-question-answers-row img').trigger('click');
    $('.fg-quiz-questions .question-three-women .fg-quiz-question-answers-row img').trigger('click');
    $('.fg-quiz-questions .question-four-women .fg-quiz-question-answers-row img').trigger('click');
    $('.fg-quiz-questions .question-five-women .fg-quiz-question-answers-row img').trigger('click');
    $('.fg-quiz-questions .question-one-men .fg-quiz-question-answers-row img').trigger('click');
    done();

    expect($('.active')).toExist();
  });
});
