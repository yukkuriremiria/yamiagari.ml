window.onload = () => {
  const ph = new ParallaxHero('.hero');
};

class ParallaxHero {
  constructor(q) {
    this.element = q;
    this.bindScroll();
    this.sampleScroll();
  }
  bindScroll() {
    $(window).on('scroll', () => {
      const scrolled = $(window).scrollTop();
      //Move & fade the H1 on scroll.
      $(`${this.element} h1`).css({
        'top': `${scrolled * 0.7}px`,
        'opacity': `${1 - scrolled / $(this.element).outerHeight() * 1.8}` });

      //Move & zoom the hero background image
      $(this.element).css({
        'background-position': `50% calc(50% + ${scrolled * 0.2}px)`,
        'background-size': `${200 + scrolled * 50 / $(this.element).outerHeight()}%` });

      //Fade the extra rainbow div just in case it's visible
      $(`${this.element} .optional-rainbow`).css('opacity', `${0.4 + scrolled / $(this.element).outerHeight()}`);
    });
    //added control to toggle the extra rainbow div, just for s&g
    $('.selectable').on('click', e => {
      $('.selectable').toggleClass('on');
      $('.hero').toggleClass('fadeout');
    });
  }
  sampleScroll() {
    //move it so that it shows in portfolio
    setTimeout(function () {$.scrollTo(500, 2000);}, 500);
  }}