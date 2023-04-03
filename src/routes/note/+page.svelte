<script lang="ts">
	import Button from '~/components/Button.svelte';
	import Input from '~/components/Input.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h1>Notes</h1>

	<ul>
		{#each data.notes as note}
			<li>{note.content}</li>
		{/each}
	</ul>

	<form method="POST" class="p-4">
		<Input label="本文" name="content" />
		<Button type="submit">投稿する</Button>
	</form>
</main>
