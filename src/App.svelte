<script>
  import { onMount } from "svelte";
  let image1 = "./images/bg.jpg";
  let image2 = "./images/moon.png";
  let image3 = "./images/mountain.png";
  let image4 = "./images/road.png";

  onMount(() => {
    let one = document.getElementById("image1");
    let two = document.getElementById("image2");
    let three = document.getElementById("image3");
    let four = document.getElementById("image4");
    let text = document.getElementById("text");
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      one.style.top = value * 0.5 + "px";
      two.style.left = -value * 0.5 + "px";
      three.style.top = -value * 0.15 + "px";
      four.style.top = value * 0.15 + "px";
      text.style.top = value * 1 + "px";
    });
  });
</script>

<section>
  <img src={image1} id="image1" alt="image1" />
  <img src={image2} id="image2" alt="image2" />
  <img src={image3} id="image3" alt="image3" />
  <img src={image4} id="image4" alt="image4" />
  <h1 id="text">Alla luna, Giacomo Leopardi</h1>
</section>
<pre
  id="text2">
  O graziosa luna, io mi rammento
  Che, or volge l’anno, sovra questo colle
  Io venia pien d’angoscia a rimirarti:
  E tu pendevi allor su quella selva
  Siccome or fai, che tutta la rischiari.
  Ma nebuloso e tremulo dal pianto
  Che mi sorgea sul ciglio, alle mie luci
  Il tuo volto apparia, che travagliosa
  Era mia vita: ed è, nè cangia stile,
  O mia diletta luna. E pur mi giova
  La ricordanza, e il noverar l’etate
  Del mio dolore. Oh come grato occorre
  Nel tempo giovanil, quando ancor lungo
  La speme e breve ha la memoria il corso,
  Il rimembrar delle passate cose,
  Ancor che triste, e che l’affanno duri!
</pre>

<style>
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #0a2a43, transparent);
    z-index: 10000;
  }
  section:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #0a2a43;
    z-index: 10000;
    mix-blend-mode: color;
  }
  section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  #text {
    position: relative;
    color: #fff;
    font-size: 100px;
    font-family: "B612", sans-serif;
    z-index: 1;
  }
  #text2 {
    color: #fff;
    justify-content: center;
    line-height: 2;
    display: flex;
    font-size: 20px;
    font-family: "B612", sans-serif;
    margin: 30px;
  }

  #image4 {
    z-index: 2;
  }
</style>
