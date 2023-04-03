<script lang="ts">
	import Button from '~/components/Button.svelte';
	import Input from '~/components/Input.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h2 class="text-5xl font-black">ノートを投稿</h2>

	<form method="POST" class="p-4">
		<Input label="本文" name="content" />
		<Button type="submit">投稿する</Button>
	</form>

	<ul>
		{#each data.notes as note}
			<li>{note.content}</li>
		{/each}
	</ul>
</main>
