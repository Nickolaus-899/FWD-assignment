<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './../css/main.css';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="author" content="Nickolaus Petukhov" />
	<meta name="description" content="My Portfolio" />
</svelte:head>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
