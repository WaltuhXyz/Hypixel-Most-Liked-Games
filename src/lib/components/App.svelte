<script lang="ts">
    import locale from "$lib/assets/locale/gameIDs.json";
    import type { Snapshot, SnapshotHistory } from "$lib/helper/types";
	import { onMount } from "svelte";
	import Chart from "./Chart.svelte";

    const endpoint: string = "https://hpendpoint.waltuh.xyz/";
    let snapshotHistory: Array<Snapshot> = [];

    onMount(async () => {
        async function fetchSnapshotHistory() {
            console.debug("Fetching snapshot history");
            const r = await fetch(endpoint);

            console.debug("Validating response");
            if (!r.ok) {
                console.error(`Fetch failed with ${r.status}`);
                return [];
            }

            console.debug("Extracting JSON");
            const body: SnapshotHistory = await r.json();
            if (!body || !body.success) {
                console.error("Endpoint failed to fullfill the fetch");
                return [];
            }

            return <Array<Snapshot>>body.snapshot;
        }

        async function changeSnapshotHistory() {
            console.debug("Changing snapshot history. Reactivity should happen now!");
            snapshotHistory = await fetchSnapshotHistory();
            return changeSnapshotHistory;
        }

        setInterval(await changeSnapshotHistory(), 60 * 60 * 1000);
    });

    function getUserFriendlyGameName(key: string): string {
        const localeCasted: any = (<any>locale);
        if (localeCasted[key] !== undefined) {
            return localeCasted[key];
        }

        return key.replace("_", " ").toLowerCase().split(" ").map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
        ).join(" ");
    }

    function getChartOptions(snapshotHistory: Array<Snapshot>): Highcharts.Options {
        const series: any = {
            total: {
                type: "areaspline",
                name: "Total",
                data: new Array<number>(),
            }
        };

        snapshotHistory.forEach(snap => {
            series.total.data.push(snap.total);
            snap.games.sort((a, b) => b.count - a.count).forEach(game => {
                if (series[game.gameId] === undefined) {
                    series[game.gameId] = {
                        type: "areaspline",
                        name: getUserFriendlyGameName(game.gameId),
                        data: [ game.count ]
                    };
                    return;
                }

                series[game.gameId].data.push(game.count);
            });
        })

        return {
            title: {
                text: "Last 24 hours"
            },
            tooltip: {
                headerFormat: "<b>Player count on {point.x} hour</b><br />"
            },
            yAxis: {
                title: {
                    text: "Count"
                }
            },
            plotOptions: {
                series: {
                    pointStart: 1,
                    pointRange: 1,
                }
            },
            series: Object.values(series),
        };
    }

    $: chartOptions = getChartOptions(snapshotHistory);
</script>

<h1>Hypixel Most Liked Games</h1>

<div class="chart" id="chart">
    <Chart options={chartOptions} />
</div>

<h2 id="article">What's wrong?</h2>
<div class="text-block">
    <p>There are lots of games and it seems like they're dead, <b>but why?</b><p>

    <p><b>June 11, 2019.</b> Skyblock is officialy released to the public. It was available only for ranked users. Hypixel Team began the Skyblock forum section.</p>
        
    <p><b>June 13-14, 2019.</b> Skyblock 0.2 is ready. Subreddit especially for the Skyblock is created.</p>
        
    <p><b>June 15, 2019.</b> Technoblade makes the first video about the Hypixel Skyblock.</p>
        
    <p><b>June 18, 2019.</b> Timedeo publishes his fairy soul location guide.</p>
        
    <p><b>Now.</b> Skyblock became the biggest MMO RPG in Minecraft. Tens of thousands of players are playing it everyday. There are more than 1k items existing.</p>
        
    <p>Did you notice a lot of changes made to Skyblock in this period of time? Hypixel Skyblock gained a lot of popularity because of the famous Youtubers that are still playing today.</p>
        
    <p>But sadly, Hypixel Devs can't spread their time across all the games equally. Skyblock needs a lot of updates. The games like Skywars, Build Battle, Housing, Murder Mystery and others are long forgotten. There are no large updates on these for a long time of 4 years. No new maps, no new features, no new gameplay, <b>no future</b>.</p>
        
    <p><b>People are bored...</b></p>
</div>

<div class="footer">
    <p>Made by DrupalDoesNotExists and TurtleWalter with ❤️ and ☕!</p>
</div>

<style>
    .chart {
        width: 75%;
        height: 40%;
        margin: 3.5em auto;
    }

    .text-block {
        max-width: 50%;
        margin: 0 auto;
        background-color: var(--color-black);
        padding: 0.5em;
        border-radius: 5px;
    }

    .footer {
        text-align: center;
        margin: 1em;
        padding: 1em;
    }
</style>
