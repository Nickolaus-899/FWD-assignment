<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import type { ID } from '../types';
	import type { Joke } from '../types';

	import { base } from '$app/paths';

	export const myEmail = 'n.petukhov@innopolis.university';

	export let titleElement = 'Waiting...';
	export let imgSrc = '';
	export let imgAlt = '';
	export let dateElement = '';
	export let releasedElement = '';

	dayjs.extend(relativeTime);

	export const jokeHandler = async () => {
		const params1: URLSearchParams = new URLSearchParams();
		params1.append('email', myEmail);

		const id: ID = await fetch(
			`https://fwd.innopolis.university/api/hw2?` + params1.toString()
		).then((r) => r.json());

		const params2: URLSearchParams = new URLSearchParams();
		params2.append('id', id);

		const res: Response = await fetch(
			'https://fwd.innopolis.university/api/comic?' + params2.toString()
		);
		const data: Joke = await res.json();

		const { month, year, day, safe_title, img, alt } = data;

		titleElement = safe_title;
		dateElement = 'Date: ' + day + ':' + month + ':' + year;

		releasedElement = 'Released: ' + dayjs(new Date(year, month, day)).fromNow();

		imgSrc = img;
		imgAlt = alt;
	};
</script>

<div class="assignment">
	<h4 class="assignment-title">Third Assignment</h4>
	<div class="aligning-button enigma-link">
		<p class="id">
			{titleElement}
		</p>

		<button class="api-button footer-button enigma-button" on:click={() => jokeHandler()}
			>Click me!</button
		>
		<img src={imgSrc} alt={imgAlt} />
		<p>
			{dateElement}
		</p>
		<p>
			{releasedElement}
		</p>

		<a href="{base}/" class="api-button footer-button"> Back </a>
	</div>
</div>
