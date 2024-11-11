<script>
	import Badge from '$lib/components/Badge.svelte';
</script>

<div class="flex h-dvh flex-col items-center justify-center gap-8">
	<div class="flex items-center gap-6">
		<Badge size="sm" color="neutral">Label</Badge>
		<Badge size="md" color="neutral">Label</Badge>
		<Badge size="lg" color="neutral">Label</Badge>
	</div>

	<div class="flex items-center gap-6">
		<Badge size="sm" color="error">Label</Badge>
		<Badge size="md" color="error">Label</Badge>
		<Badge size="lg" color="error">Label</Badge>
	</div>

	<div class="flex items-center gap-6">
		<Badge size="sm" color="warning">Label</Badge>
		<Badge size="md" color="warning">Label</Badge>
		<Badge size="lg" color="warning">Label</Badge>
	</div>

	<div class="flex items-center gap-6">
		<Badge size="sm" color="success">Label</Badge>
		<Badge size="md" color="success">Label</Badge>
		<Badge size="lg" color="success">Label</Badge>
	</div>

	<div class="flex items-center gap-6">
		<Badge size="sm" color="brand">Label</Badge>
		<Badge size="md" color="brand">Label</Badge>
		<Badge size="lg" color="brand">Label</Badge>
	</div>

	<a href="/">Home</a>
</div>
