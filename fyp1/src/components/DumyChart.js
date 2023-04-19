import React from 'react'


import { ResponsiveLine } from '@nivo/line'

const data1 = [{
    "id": "iv",
    "color": "hsl(0, 70%, 50%)",
    "data": [{
        x: 0,
        y: 1,
    }, {
        "x": "1",
        "y": "0.9"
    }, {
        "x": "2",
        "y": "0.8"
    }, {
        "x": "3",
        "y": "0.7"
    }, {
        "x": "4",
        "y": "0.6"
    }, {
        "x": "5",
        "y": "0.5"
    }, {
        "x": "6",
        "y": "0.4"
    }, { "x": 7, "y": 0.1 }, {
        "x": "8",
        "y": "0"
    }, {
        "x": "9",
        "y": "0"
    }, {
        "x": "10",
        "y": "0"
    },
    ]
}]


const DumyChart = () => {

    console.log("data1", data1)
    return (<ResponsiveLine
        data={data1}
        colors={{ scheme: 'category10' }}
        margin={{ top: 50, right: 80, bottom: 50, left: 60 }}
        xScale={{ type: 'linear', min: '0', max: '10' }}
        yScale={{
            type: 'linear',
            min: '0',
            max: '1',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Voltage ',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{

            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Current',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={6}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    )
}
export default DumyChart;