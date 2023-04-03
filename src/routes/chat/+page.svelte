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

<main class="m-5">
	<a href="/" class="text-blue-500 hover:underline">{'<'} Back to top</a>
	<h1 class="text-3xl font-bold">Chat with GPT-3.5</h1>
	<ul class="max-w-md p-3 list-disc list-inside mb-20">
		{#each $talks as talk}
			<li>{talk.role}: {talk.content}</li>
		{:else}
			<p>下の入力欄からなにか送ってみてください！</p>
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
	<div class="fixed bottom-0 left-0 w-full p-3">
		<div class="relative">
			<input
				bind:value={message}
				on:keydown={(event) => event.key === 'Enter' && sendMessage()}
				class="block w-full p-4 text-gray-900 border border-gray-300 bg-gray-50 focus:ring-green-500 focus:border-green-500"
			/>
			<button
				on:click={sendMessage}
				disabled={loading}
				class="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-4 py-2"
				>送信</button
			>
		</div>
	</div>
</main>
