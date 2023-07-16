<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './../css/main.css';
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
