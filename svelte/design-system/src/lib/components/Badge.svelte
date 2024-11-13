<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	/* COLOR CLASSES */
	const colorClasses = {
		neutral: 'bg-gray-50 border-neutral-200 text-neutral-600',
		error: 'bg-red-50 border-red-200 text-red-600',
		warning: 'bg-amber-50 border-amber-200 text-amber-700',
		success: 'bg-green-50 border-green-200 text-green-700',
		brand: 'bg-indigo-50 border-indigo-200 text-indigo-700'
	};

	/* SIZE CLASSES */
	const sizeClasses = {
		sm: 'text-xs px-1.5 py-0.5',
		md: 'text-sm px-2 py-0.5',
		lg: 'text-sm px-2.5 py-1'
	};

	let {
		size = 'sm',
		color = 'neutral',
		children,
		...rest
	}: {
		size?: 'sm' | 'md' | 'lg';
		color?: 'neutral' | 'error' | 'warning' | 'success' | 'brand';
		children: Snippet;
	} & HTMLAttributes<HTMLSpanElement> = $props();

	const className = `rounded-full border border-solid w-fit ${sizeClasses[size]} ${colorClasses[color]}`;
</script>

<span class={className} {...rest}>
	{@render children()}
</span>
