<script>
	import Box from "./Box.svelte"
	import Forms from "./Forms.svelte"
</script>

<header>
	<h1>Word document generator</h1>
</header>
<main>
	<Forms></Forms>
</main>

<style>

	header {
		align-items: center;
		justify-content: center;
		display: flex;
		height: 300px;
	}

	form {
		align-items: center;
		justify-content: center;
		display: flex;
	}

	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 500px;
	}

</style>