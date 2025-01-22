// import typescriptLogo from './typescript.svg';
// import viteLogo from '/vite.svg';
import { setupGsap, setupLuxy } from './setup.ts';
import './css/app.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<section class="Top Section">
    <h1 class="title">開発合宿 2025 / Development camp</h1>

  
  <div class="Info Container">
    <h2 class="">Info</h2>
    <p>Date：1/21（Tue） - 22（Wed）</p>
    <p>Location：リソルの森 </p>
  </div>

</section>

<section class="About Section">
  <div class=" Container">
    <h2 class="heading">横スクロールがはじまるパララックスサイトをつくってみたい</h2>
  </div>
</section>

<section class="SideScroll Section">
  <div class="SideScrollContainer Container">
    <h2 class="SideScrollHeading heading">
      開発合宿 / Development camp
    </h2>
    <div class="SideScrollListWrapper">
      <ul class="SideScrollList">
        <li class="SideScrollItem">
          <p>なんか</p>
          <img src="/imgs/IMG_6682.jpg" />
        </li>
        <li class="SideScrollItem">
          <p>できたけど</p>
           <img src="/imgs/IMG_6683.jpg" />  
        </li>
        <li class="SideScrollItem">
          <p>GSAPという</p>
          
          <img src="/imgs/IMG_9343.jpg" />  
        </li>
        <li class="SideScrollItem">
          <p>ライブラリで</p>
          <img src="/imgs/IMG_9344.jpg" />
          
        </li>
        <li class="SideScrollItem">
          
          <p>やるしかなかった</p>
          <img src="/imgs/IMG_20250121_120455.jpg" />  
        </li>
        <li class="SideScrollItem">
          <p>です</p>
          <img src="/imgs/map.png" />  
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="Bottom Section">
  <div class="Container">
    <h2 class="normal-heading heading">Lib</h2>
    <p>
      https://gsap.com/
    </p>
    <p>https://github.com/min30327/luxy.js</p>

    <h2 class="normal-heading heading">Repo</h2>
    <p>https://github.com/toshick/horizontal-pararax</p>
  </div>
</section>


<article id="luxy">
  <img src="/imgs/cloud.png" class="Cloud Cloud1 luxy-el" data-horizontal="1" data-speed-x="-55" />
  <img src="/imgs/cloud.png" class="Cloud Cloud2 luxy-el" data-horizontal="1" data-speed-x="-30" />
  <img src="/imgs/cloud2.png" class="Cloud Cloud3 luxy-el" data-horizontal="1" data-speed-x="13" />
  <img src="/imgs/cloud2.png" class="Cloud Cloud4 luxy-el" data-horizontal="1" data-speed-x="12" />
  <img src="/imgs/cloud.png" class="Cloud Cloud5 luxy-el" data-horizontal="1" data-speed-x="-4" />
  <img src="/imgs/cloud.png" class="Cloud Cloud6 luxy-el" data-horizontal="1" data-speed-x="-12" />
  <img src="/imgs/cloud.png" class="Cloud Cloud7 luxy-el" data-horizontal="1" data-speed-x="6" />
</article>
`;

setupGsap();
setupLuxy();
