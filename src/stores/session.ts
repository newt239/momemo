import { browser } from '$app/environment';
import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';

const localData = browser ? window.localStorage.getItem('momemo-session-id') : null;
const initialValue = localData ? localData : nanoid(6);
if (browser) {
	window.localStorage.setItem('momemo-session-id', initialValue);
}
const session_id = writable<string>(initialValue);

export default session_id;
