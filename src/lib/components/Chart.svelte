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

<svelte:head>
    <script type="module" src="https://code.highcharts.com/modules/mouse-wheel-zoom.js" />
</svelte:head>

<div bind:this={element}></div>

<style>
    div {
        border-radius: 5px;
    }
</style>
