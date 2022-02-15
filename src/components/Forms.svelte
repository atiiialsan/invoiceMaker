<script>
    import Time from "svelte-time";
    import { invoiceData } from "../stores/store"
    import Box from "../components/Box.svelte"
</script>

<Time timestamp="{new Date()}"></Time>


    <h1>Form</h1>
    <form class="content">
        <label>Bauvorhaben</label>
        <input type="text" bind:value={$invoiceData.Bauvorhaben} />
        <label>Datum</label>
        <input type="text" bind:value={$invoiceData.Datum} />
        <label>Kunde</label>
        <input type="text" bind:value={$invoiceData.phone} />
        <Box></Box>
        <p>
            {JSON.stringify($invoiceData, 0, 2)}</p>
    </form>


<style>

        
        .content {
            display: grid;
            justify-content: center;
            align-items: center;
        }



</style>