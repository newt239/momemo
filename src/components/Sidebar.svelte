<script>
	import features from '~/lib/features';
</script>

<div class="w-1/4 h-screen border-r-2 p-2">
	<h1 class="text-3xl font-black px-2">
		<a href="/">もめも</a>
	</h1>
	<div class="p-2">
		{#each features as feature}
			<a href={feature.path} class="block p-2 hover:bg-blue-100 transition">{feature.title}</a>
		{/each}
	</div>
	<div class="p-2">
		<small>© newt 2023</small>
	</div>
</div>
