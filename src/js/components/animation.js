import { gsap } from "gsap"
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(".animate-logo", {opacity: 0, scale: .5}, {opacity: 1, scale: 1, duration: 1});
gsap.fromTo(".animate-nav-list", {opacity: 0, scale: .5}, {opacity: 1, scale: 1, duration: 1});
gsap.fromTo(".animate-hero-text", {x: -100, opacity: .2}, {x: 0, opacity: 1, duration: 1.5});
gsap.fromTo('.hero__arrow', {opacity: 0, scale: .2}, {opacity: 1, scale: 1, duration: 1})
gsap.to('.hero__arrow', {y: -10, duration: .5, repeat: -1, yoyo: true})
gsap.to('.hero__arrow', {
  scrollTrigger: {
    trigger: '.subhero',
    start: '+=20 center',
  },
  display: 'none'
})


gsap.fromTo('.load-wave', {y: 0, opacity: 1}, {y: '-200%', opacity: .5, duration: 2.5})

gsap.to('.animate-hero-image', {
  scrollTrigger: {
    trigger: '.subhero',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: true,
  },
  y: 300,
  x: -200,
  opacity: 0,
  duration: 3
})

gsap.timeline({
    scrollTrigger: {
      trigger: '.subhero',
      start: 'top center',
      end: 'top center',
      snap: {
        duration: 3,
      }
    }
  })
  .from(".subhero", {opacity: .3, y: 100})
  .to(".subhero", {opacity: 1, y: 0})

gsap.timeline({
  scrollTrigger: {
    trigger: '.animate-map-about-triger',
    start: 'top bottom',
    end: 'bottom 70%',
    // endTrigger: '.animate-map-about',
    scrub: true,
    // markers: true,
    snap: {
      duration: 5,
    }
  }
})
.from(".animate-map-about", {opacity: 0, y: -300, x: -150})
.to(".animate-map-about", {opacity: 1, y: 0, x: 0})

gsap.timeline({
  scrollTrigger: {
    trigger: '.animate-map-progects-triger',
    start: 'top bottom',
    end: 'bottom 70%',
    scrub: true,
    snap: {
      duration: 5,
    }
  }
})
.from(".animate-map-progects", {opacity: 0, y: -300, x: 150})
.to(".animate-map-progects", {opacity: 1, y: 0, x: 0})

gsap.timeline({
  scrollTrigger: {
    trigger: '.animate-map-contacts-triger',
    start: 'top bottom',
    end: 'bottom 85%',
    scrub: true,
    snap: {
      duration: 5,
    }
  }
})
.from(".animate-map-contacts", {opacity: 0, y: -300, x: -150})
.to(".animate-map-contacts", {opacity: 1, y: 0, x: 0})
