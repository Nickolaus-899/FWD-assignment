import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { ID, Joke } from '../types';

export const csr = false;

const myEmail = 'n.petukhov@innopolis.university';

dayjs.extend(relativeTime);

export async function load() {
	const params1: URLSearchParams = new URLSearchParams();
	params1.append('email', myEmail);

	const id: ID = await fetch(`https://fwd.innopolis.university/api/hw2?` + params1.toString()).then(
		(r) => r.json()
	);

	const params2: URLSearchParams = new URLSearchParams();
	params2.append('id', id);

	const res: Response = await fetch(
		'https://fwd.innopolis.university/api/comic?' + params2.toString()
	);
	const data: Joke = await res.json();

	const { month, year, day, safe_title, img, alt } = data;

	// titleElement = safe_title;
	// dateElement = 'Date: ' + day + ':' + month + ':' + year;
	//
	// releasedElement = 'Released: ' + dayjs(new Date(year, month, day)).fromNow();
	//
	// imgSrc = img;
	// imgAlt = alt;

	return {
		joke: {
			titleElement: safe_title,
			imgSrc: img,
			imgAlt: alt,
			dateElement: 'Date: ' + day + ':' + month + ':' + year,
			releasedElement: 'Released: ' + dayjs(new Date(year, month, day)).fromNow()
		}
	};
}
