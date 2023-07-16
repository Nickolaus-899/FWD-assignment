<script>
	import Joke from './Joke.svelte';
	export let data;
</script>

<svelte:head>
	<title>Comic</title>
</svelte:head>

<div class="assignment">
	<h4 class="assignment-title">Third Assignment</h4>
	<div class="aligning-button enigma-link">
		<p class="id">
			{data.joke.titleElement}
		</p>

		<img src={data.joke.imgSrc} alt={data.joke.imgAlt} />
		<p>
			{data.joke.dateElement}
		</p>
		<p>
			{data.joke.releasedElement}
		</p>

		<Joke />
	</div>
</div>
