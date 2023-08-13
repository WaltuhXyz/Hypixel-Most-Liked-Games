// Highcharts theme

import Highcharts from "highcharts";

export const theme: Highcharts.Options = {
    colors: [
        '#0088ea',
        '#0f82e9',
        '#1e7be8',
        '#2c75e7',
        '#3b6fe6',
        '#4a68e4',
        '#5962e3',
        '#685ce2',
        '#7756e1',
        '#854fe0',
        '#9449df',
        '#a343de',
        '#b23cdd',
        '#c136db',
        '#cf30da',
        '#de29d9',
        '#ed23d8',
    ],
    chart: {
        type: "areaspline",
        backgroundColor: "var(--color-black)",
        zooming: {
            type: "xy"
        }
    },
    title: {
        style: {
            color: "var(--color-white)",
            font: "bold 16px Ubuntu,sans-serif"
        }
    },
    legend: {
        // layout: "vertical",
        // align: "left",
        // verticalAlign: "top",
        // floating: true,
        // x: 120,
        // y: 70,
        backgroundColor: "var(--color-gray)",
        itemStyle: {
            color: "var(--color-white)",
        },
        itemHoverStyle: {
            color: "var(--color-white)",
        }
    },
    xAxis: {
        gridLineColor: "var(--color-white)",
        title: {
            style: {
                color: "var(--color-white)",
                font: "9pt Ubuntu,sans-serif"
            }
        },
    },
    yAxis: {
        title: {
            style: {
                color: "var(--color-white)",
                font: "9pt Ubuntu,sans-serif"
            }
        },
    },
    tooltip: {
        shared: true,
    },
    credits: {
        style: {
            color: "var(--color-white)",
        }
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        },
    },
};

Highcharts.setOptions(theme);
