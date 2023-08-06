// Highcharts theme

import Highcharts from "highcharts";

export const theme: Highcharts.Options = {
    colors: ['#F48120', '#FAAD3F', '#058DC7', '#50B432', '#ED561B', '#DDDF00',
             '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        type: "areaspline",
        backgroundColor: "var(--color-black)",
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
