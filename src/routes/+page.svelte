<script>
	import features from '~/lib/features';
</script>

<main class="m-5">
	<h1 class="text-5xl font-black">
		<span
			class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
			>もめも!</span
		>
	</h1>
	<div class="p-3">
		<ul class="max-w-md list-disc list-inside">
			{#each features as feature}
				<li>
					<a href={feature.path} class="text-blue-500 hover:underline">{feature.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</main>
