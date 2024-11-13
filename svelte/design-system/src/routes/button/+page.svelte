<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Icon from '@iconify/svelte';
</script>

{#snippet leftIcon()}
	<Icon icon="ri:star-line" />
{/snippet}

{#snippet rightIcon()}
	<Icon icon="ri:star-line" />
{/snippet}

<div class="flex h-dvh flex-col justify-center gap-12 px-8">
	<div class="flex flex-wrap items-center gap-5">
		<Button size="md" color="primary">Button CTA</Button>

		<Button size="lg" color="primary" iconPosition="start" {leftIcon}>Button CTA</Button>
		<Button size="xl" color="primary" iconPosition="end" {rightIcon}>Button CTA</Button>
		<Button size="xxl" color="primary">Button CTA</Button>
		<Button size="xxlIcon" color="primary">
			<Icon icon="ri:star-line" className="text-xl" />
		</Button>
	</div>

	<div class="flex flex-wrap items-center gap-5">
		<Button size="md" color="secondary">Button CTA</Button>
		<Button size="lg" color="secondary" iconPosition="start" {leftIcon}>Button CTA</Button>
		<Button size="xl" color="secondary" iconPosition="end" {rightIcon}>Button CTA</Button>
		<Button size="xxl" color="secondary">Button CTA</Button>
		<Button size="xxlIcon" color="secondary">
			<Icon icon="ri:star-line" className="text-xl" />
		</Button>
	</div>
	<div class="flex flex-wrap items-center gap-5">
		<Button size="md" color="tertiary">Button CTA</Button>
		<Button size="lg" color="tertiary" iconPosition="start" {leftIcon}>Button CTA</Button>
		<Button size="xl" color="tertiary" iconPosition="end" {rightIcon}>Button CTA</Button>
		<Button size="xxl" color="tertiary">Button CTA</Button>
		<Button size="xxlIcon" color="tertiary">
			<Icon icon="ri:star-line" className="text-xl" />
		</Button>
	</div>
	<div class="flex flex-wrap items-center gap-5">
		<Button size="mdLink" color="linkColor">Button CTA</Button>
		<Button size="lgLink" color="linkColor" iconPosition="start" {leftIcon}>Button CTA</Button>
		<Button size="xlLink" color="linkColor" iconPosition="end" {rightIcon}>Button CTA</Button>
		<Button size="xxlLink" color="linkColor">Button CTA</Button>
		<Button color="linkColor" size="xxlLink">
			<Icon icon="ri:star-line" />
		</Button>
	</div>
	<div class="flex flex-wrap items-center gap-5">
		<Button size="mdLink" color="linkGray">Button CTA</Button>
		<Button size="lgLink" color="linkGray" iconPosition="start" {leftIcon}>Button CTA</Button>
		<Button size="xlLink" color="linkGray" iconPosition="end" {rightIcon}>Button CTA</Button>
		<Button size="xxlLink" color="linkGray">Button CTA</Button>
		<Button color="linkGray" size="xxlLink">
			<Icon icon="ri:star-line" />
		</Button>
	</div>

	<div class="flex flex-wrap items-center gap-5">
		<Button size="md" color="destructive">Button CTA</Button>
		<Button size="lg" color="destructive" iconPosition="start" {leftIcon}>Button CTA</Button>
		<Button size="xl" color="destructive" iconPosition="end" {rightIcon}>Button CTA</Button>
		<Button size="xxl" color="destructive">Button CTA</Button>
		<Button size="xxlIcon" color="destructive">
			<Icon icon="ri:star-line" className="text-xl" />
		</Button>
	</div>

	<a href="/">Home</a>
</div>
