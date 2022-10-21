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
    start: '-=300 center',
    end: '-=100',
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
      start: '-=50%',
      end: '-=200',
      snap: {
        duration: 3,
      }
    }
  })
  .from(".subhero", {opacity: .3})
  .to(".subhero", {opacity: 1})

