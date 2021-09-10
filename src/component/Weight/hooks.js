import React, { useEffect, useState } from "react";

const useGoogleSheet = () => {
    const [dataFromSheet, setDataFromSheet] = useState();
    const load_data = () => {
        fetch(
            ""
        )
            .then((response) => response.json())
            .then((d) => {
                setDataFromSheet(d);
            });
    };
    useEffect(() => {
        load_data();
    }, []);
    return { dataFromSheet };
};

const useSetChartData = (dataFromSheet) => {
    const [seriesData, setSeriesData] = useState([]);
    const [chartDate, setChartDate] = useState([]);

    useEffect(() => {
        if (dataFromSheet) {
            // console.log(dataFromSheet);
            let d = [];
            let t = [];
            dataFromSheet.forEach((r) => {
                t.push(r.date.slice(5, 10));
                d.push(parseFloat(r.weight));
            });
            // console.log(t);
            setSeriesData([
                {
                    name: "weight",
                    data: d.slice(-10),
                    marker: {
                        symbol: "url(https://image.flaticon.com/icons/png/512/1014/1014706.png)",
                        width: 30,
                        height: 30,
                    },
                },
            ]);
            setChartDate(t.slice(-10));
        }
    }, [dataFromSheet]);
    return { chartDate, seriesData };
};

export { useGoogleSheet, useSetChartData };
