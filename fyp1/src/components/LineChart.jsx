import React from 'react'


import { ResponsiveLine } from '@nivo/line'

const data1=[{
    "id": "iv",
    "color": "hsl(0, 70%, 50%)",
    "data": [{x:0,
              y:10},{
                "x":"1",
                "y":"10"},{
                "x":"2",
                "y":"9.8"},{
                "x":"3",
                "y":"9.7"},{
                "x":"4",
                "y":"9.6"},{
                "x":"5",
                "y":"9.4"},{
                "x":"5.5",
                "y":"8"},{"x":6,"y":6},{
                "x":"7",
                "y":"3"},{
                "x":"8",
                "y":"2"},{
                "x":"9",
                "y":"1"},{
                "x":"10",
                "y":"0"},{
                "x":"11",
                "y":"0"},{
                "x":"12",
                "y":"0"},{
                "x":"13",
                "y":"0"},{
                "x":"14",
                "y":"0"}
                ]
}]


const LineChart = ({data,forwardRef}) => {
    console.log("data",data)
    console.log("data1",data1)
   return( <ResponsiveLine
        data={data}
        ref={forwardRef}
        colors={{ scheme: 'category10' }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'linear' ,min: '0',max: '12',}}
        yScale={{
            type: 'linear',
            min: '0',
            max: '1',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        xFormat=" >-.1f"
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
)}
export default LineChart