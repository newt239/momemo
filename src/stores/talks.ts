import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Talk = {
	role: 'user' | 'assistant';
	message: string;
};
const localData = browser ? window.localStorage.getItem('momemo-talks') : null;
const initialValue: Talk[] = localData ? JSON.parse(localData) : [];
const talks = writable<Talk[]>(initialValue);

talks.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('momemo-talks', JSON.stringify(value));
	}
});

export default talks;
