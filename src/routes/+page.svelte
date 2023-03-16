<script>
	import { page } from '$app/stores';
	$: pathname = $page.url.pathname;
</script>

<main class="m-5">
	<h1 class="text-3xl font-bold">
		Welcome to <span
			class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
			>momemo</span
		>!
	</h1>
	<div class="p-3">
		<ul class="max-w-md list-disc list-inside">
			<li>
				<a href="/chat" class="text-blue-500 hover:underline">Start chat with GPT-3.5</a>
			</li>
		</ul>
	</div>
</main>
