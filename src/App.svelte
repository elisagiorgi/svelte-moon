<script>
	let image1 = "./images/bg.jpg";
	let image2 = "./images/moon.png";
	let image3 = "./images/mountain.png";
	let image4 = "./images/road.png";

	let one = document.getElementById("image1");
	let two = document.getElementById("image2");
	let three = document.getElementById("image3");
	let four = document.getElementById("image4");
	let text = document.getElementById("text");

	function handleKeydown(event) {
		window.addEventListener("scroll",function(){
	 	var value= window.scrollY;
		 console.log(one)
	 	one.style.top= value * 0.5 + 'px';
		two.style.left= -value * 0.5 + 'px';
		three.style.top= -value * 0.15 + 'px';
		four.style.top= value * 0.15 + 'px';
		text.style.top= value * 1 + 'px';
	 })
	}

		
	


  </script>
  

  <section>
	<img src={image1} id="image1" alt="image1" />
	<img src={image2} id="image2" alt="image2" />
	<img src={image3} id="image3" alt="image3" />
	<img src={image4} id="image4" alt ="image4" />
  
	<h1 id="text">ELISA GIORGI</h1>
  </section>
  <svelte:window on:keydown={handleKeydown}/>
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
	  mix-blend-mode: color
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

	#text{
		position: relative;
		color: #fff;
		font-size: 10em;
		z-index: 1;
		}

	#image4{
			z-index:2;
		}
  </style>

  
  