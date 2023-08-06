<script lang="ts">
	import { afterUpdate } from "svelte";
    import * as Highcharts from "highcharts";
    import "$lib/helper/theme"

    let element: HTMLElement;
    export let options: Highcharts.Options;

    afterUpdate(async () => {
        Highcharts.chart({
            chart: {
                renderTo: element,
            },
            ...options,
        });
    });
</script>

<div bind:this={element}></div>

<style>
    div {
        border-radius: 5px;
    }
</style>
