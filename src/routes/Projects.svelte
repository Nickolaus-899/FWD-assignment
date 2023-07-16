<script lang="ts">
	import enigma from '../images/portfolio/enigma.jpg';
	import tank from '../images/portfolio/tank2.png';
	import fpga from '../images/portfolio/fpga.png';
	import telegram from '../images/portfolio/telegram.png';

	// import { base } from '$app/paths';
</script>

<div class="portfolio" id="portfolio">
	<div class="container">
		<h2 class="portfolio-header">Projects</h2>

		<div class="card-wrapper">
			<div class="card">
				<a href="./enigma" class="card-link">
					<img class="card-img" src={enigma} alt="Enigma" />
					<h3 class="card-title">Model of Enigma Machine</h3>
					<p>Written in C++</p>
				</a>
			</div>

			<div class="card">
				<a href="./" class="card-link">
					<img class="card-img" src={tank} alt="Mini-Game" />
					<h3 class="card-title">Mini-Game in console</h3>
					<p>Written in Python</p>
				</a>
			</div>

			<div class="card">
				<a href="./" class="card-link">
					<img class="card-img" src={fpga} alt="FPGA" />
					<h3 class="card-title">FPGA Project (MemGame)</h3>
					<p>Written in Verilog</p>
				</a>
			</div>

			<div class="card">
				<a href="./" class="card-link">
					<img class="card-img" src={telegram} alt="Telegram Bot" />
					<h3 class="card-title">InnoBookingBot</h3>
					<p>Written in Java, Flutter, Kotlin</p>
				</a>
			</div>
		</div>
	</div>
</div>
