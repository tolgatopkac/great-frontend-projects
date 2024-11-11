<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Design Systems</title>
</svelte:head>
{@render children()}
