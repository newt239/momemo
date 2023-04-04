<script lang="ts">
	import '~/app.css';
	import Sidebar from '~/components/Sidebar.svelte';
</script>

<div class="flex">
	<Sidebar />
	<div class="w-full p-5">
		<slot />
	</div>
</div>
