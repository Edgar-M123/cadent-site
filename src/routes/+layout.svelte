<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<style>
:root {
    --main-font: "Outfit", sans-serif;
    max-width: 100vw;
    align-items: center;
    background-color:#101010;
    place-items: center;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 20px;
}

main {
	max-width: 1400px;
	font-family: var(--main-font);
	font-size: 20px;
	color: #FFFFFF;
}


</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{@render children?.()}
</main>

