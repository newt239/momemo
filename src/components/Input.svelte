<script lang="ts">
	export let label: string;
	export let name: string;
</script>

<label for={name}>
	<span>{label}</span>
	<input {...$$props} class="px-4 py-2 w-full block border border-green-700" type="text" />
</label>
