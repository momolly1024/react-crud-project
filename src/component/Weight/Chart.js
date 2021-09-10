import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useGoogleSheet, useSetChartData } from "./hooks";

const Chart = () => {
    // const { chartDate, dataFromSheet } = useGoogleSheet();
    // const { seriesData } = useSetChartData(dataFromSheet);

    const options = {
        chart: {
            type: "line",
            backgroundColor: "rgba(0,0,0,0)",
            // width: 600,
        },
        plotOptions: {
            series: {
                color: {
                    linearGradient: [0, 0, 100, 300],
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.getOptions().colors[2]],
                    ],
                },
            },
        },
        title: {
            text: "",
        },
        // series: seriesData,
        series: [
            {
                name: "a",
                data: [1, 2, 3, 2, 3, 2, 1, 2, 2.5, 3.5, 1.8],
                marker: {
                    symbol: "url(https://image.flaticon.com/icons/png/512/1014/1014706.png)",

                    width: 30,
                    height: 30,
                },
            },
        ],
        xAxis: {
            // categories: chartDate,
        },
        yAxis: {
            title: {
                text: "",
            },
            allowDecimals: true,
        },
        credits: {
            enabled: false,
        },
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export default Chart;
