import luxy from 'luxy.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function setupGsap() {
  const listWrapperEl = document.querySelector('.SideScrollListWrapper');
  const listEl = document.querySelector('.SideScrollList');

  if (listEl && listWrapperEl) {
    gsap.to(listEl, {
      x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
      ease: 'ease',
      scrollTrigger: {
        trigger: '.SideScroll',
        start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
        end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
        scrub: true, //スクロールにあわせてアニメーションさせる
        pin: true, //縦スクロールが停止して画面が固定される
        anticipatePin: 0, //固定のタイミングをうまく検知する?
        invalidateOnRefresh: true, //リサイズ時の再計算
      },
    });
  }
}

export function setupLuxy() {
  luxy.init();
}
