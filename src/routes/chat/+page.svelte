<script lang="ts">
	import { nanoid } from 'nanoid';
	import session_id from '~/stores/session';
	import talks from '~/stores/talks';

	let message: string = '';

	let loading: boolean = false;
	let error: boolean = false;

	const sendMessage = async () => {
		talks.update((v) => [...v, { role: 'user', content: message }]);
		loading = true;
		try {
			const response = await fetch('https://api.newt239.dev/openai/gpt-3_5-with-logs', {
				method: 'POST',
				body: JSON.stringify({
					messages: $talks
				})
			});
			const data = await response.json();
			message = '';
			talks.update((v) => [...v, { role: 'assistant', content: data.choices[0].message.content }]);
			loading = false;
		} catch (e) {
			loading = false;
			error = true;
		}
	};

	const reset = () => {
		talks.set([]);
		session_id.set(nanoid());
		loading = false;
		error = false;
	};
</script>

<main>
	<h2 class="text-5xl font-black">Chat with GPT-3.5</h2>
	{#if $talks.length === 0}
		<p class="p-2">下の入力欄からなにか送ってみてください！</p>
	{/if}
	<div class="w-full relative">
		<input
			bind:value={message}
			on:keydown={(event) => event.key === 'Enter' && sendMessage()}
			class="block w-full px-4 py-2 text-gray-900 border border-gray-300 bg-gray-50 focus:ring-green-500 focus:border-green-500"
		/>
		<button
			on:click={sendMessage}
			disabled={loading}
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-4 py-2"
			>送信</button
		>
	</div>
	<ul class="max-w-md p-3 list-disc list-inside mb-20">
		{#each $talks as talk}
			<li>{talk.role}: {talk.content}</li>
		{/each}
	</ul>
	{#if loading}
		<div>GPT-3.5が考え中...</div>
	{/if}
	{#if error}
		<div class="flex justify-between items-center">
			<p class="text-red-500 flex-grow">エラーが発生しました。</p>
			<button
				on:click={reset}
				class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 text-sm px-4 py-2"
				>リセット</button
			>
		</div>
	{/if}
</main>
