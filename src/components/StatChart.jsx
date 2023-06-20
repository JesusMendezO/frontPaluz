import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetSemanasQuery } from "state/api";
const StatChart = () => {
    //Theme
    const theme = useTheme();
    const { data, isLoading } = useGetSemanasQuery();
    
    const [totalSalesLine, totalUnitsLine] = useMemo(() => {
   
      if (!data) return [];
  
      const  monthlyData  = data.total[0];
      let keys = []
      keys = Object.keys(monthlyData)
      let value = []
      value = Object.values(monthlyData)
      let container = [];
      let semanas = [];
      const usersByLikes = ()=>{
        for (let i = 0; i < Object.keys(monthlyData).length; i++) {
         
          let vacio={}
    let j=i+2;
          vacio.x = keys[i];
          vacio.y = Number(value[i]);
      
        container=vacio;
          
        semanas=semanas.concat(container)
        }
    
      }  
      usersByLikes();
      let graf=semanas.slice(1,Object.keys(monthlyData).length);
      console.log(semanas.slice(1,Object.keys(monthlyData).length))
      const totalSalesLine = {
        id: "totalSales",
        color: theme.palette.secondary.main,
        data: graf,
      };
      
      const totalUnitsLine = {
        id: "totalUnits",
        color: theme.palette.secondary[600],
        data: graf,
      };
  
      // Object.values(monthlyData).reduce(
      //   (acc, { month, totalSales, totalUnits }) => {
      //     const curSales = acc.sales + totalSales;
      //     const curUnits = acc.units + totalUnits;
  
      //     totalSalesLine.data = [
      //       ...totalSalesLine.data,
      //       { x: month, y: curSales },
      //     ];
      //     totalUnitsLine.data = [
      //       ...totalUnitsLine.data,
      //       { x: month, y: curUnits },
      //     ];
  
      //     return { sales: curSales, units: curUnits };
      //   },
      //   { sales: 0, units: 0 }
      // );
  
      return [[totalSalesLine], [totalUnitsLine]];
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  
    const data1 = [
        {
          "id": "japan",
          "color": "hsl(280, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 101
            },
            {
              "x": "helicopter",
              "y": 157
            },
            {
              "x": "boat",
              "y": 282
            },
            {
              "x": "train",
              "y": 141
            },
            {
              "x": "subway",
              "y": 28
            },
            {
              "x": "bus",
              "y": 238
            },
            {
              "x": "car",
              "y": 192
            },
            {
              "x": "moto",
              "y": 230
            },
            {
              "x": "bicycle",
              "y": 59
            },
            {
              "x": "horse",
              "y": 105
            },
            {
              "x": "skateboard",
              "y": 154
            },
            {
              "x": "others",
              "y": 185
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(224, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 233
            },
            {
              "x": "helicopter",
              "y": 130
            },
            {
              "x": "boat",
              "y": 102
            },
            {
              "x": "train",
              "y": 151
            },
            {
              "x": "subway",
              "y": 210
            },
            {
              "x": "bus",
              "y": 105
            },
            {
              "x": "car",
              "y": 34
            },
            {
              "x": "moto",
              "y": 11
            },
            {
              "x": "bicycle",
              "y": 241
            },
            {
              "x": "horse",
              "y": 226
            },
            {
              "x": "skateboard",
              "y": 96
            },
            {
              "x": "others",
              "y": 242
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(96, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 187
            },
            {
              "x": "helicopter",
              "y": 199
            },
            {
              "x": "boat",
              "y": 214
            },
            {
              "x": "train",
              "y": 274
            },
            {
              "x": "subway",
              "y": 167
            },
            {
              "x": "bus",
              "y": 133
            },
            {
              "x": "car",
              "y": 217
            },
            {
              "x": "moto",
              "y": 48
            },
            {
              "x": "bicycle",
              "y": 138
            },
            {
              "x": "horse",
              "y": 243
            },
            {
              "x": "skateboard",
              "y": 222
            },
            {
              "x": "others",
              "y": 223
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(292, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 196
            },
            {
              "x": "helicopter",
              "y": 199
            },
            {
              "x": "boat",
              "y": 42
            },
            {
              "x": "train",
              "y": 220
            },
            {
              "x": "subway",
              "y": 287
            },
            {
              "x": "bus",
              "y": 74
            },
            {
              "x": "car",
              "y": 152
            },
            {
              "x": "moto",
              "y": 43
            },
            {
              "x": "bicycle",
              "y": 282
            },
            {
              "x": "horse",
              "y": 233
            },
            {
              "x": "skateboard",
              "y": 139
            },
            {
              "x": "others",
              "y": 203
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(300, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 181
            },
            {
              "x": "helicopter",
              "y": 248
            },
            {
              "x": "boat",
              "y": 97
            },
            {
              "x": "train",
              "y": 1
            },
            {
              "x": "subway",
              "y": 124
            },
            {
              "x": "bus",
              "y": 131
            },
            {
              "x": "car",
              "y": 2
            },
            {
              "x": "moto",
              "y": 248
            },
            {
              "x": "bicycle",
              "y": 41
            },
            {
              "x": "horse",
              "y": 59
            },
            {
              "x": "skateboard",
              "y": 64
            },
            {
              "x": "others",
              "y": 95
            }
          ]
        }
      ]

      const data2 = [
        {
          "id": "japan",
          "color": "hsl(78, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 40
            },
            {
              "x": "helicopter",
              "y": 15
            },
            {
              "x": "boat",
              "y": 178
            },
            {
              "x": "train",
              "y": 25
            },
            {
              "x": "subway",
              "y": 152
            },
            {
              "x": "bus",
              "y": 120
            },
            {
              "x": "car",
              "y": 213
            },
            {
              "x": "moto",
              "y": 155
            },
            {
              "x": "bicycle",
              "y": 201
            },
            {
              "x": "horse",
              "y": 16
            },
            {
              "x": "skateboard",
              "y": 98
            },
            {
              "x": "others",
              "y": 157
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(176, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 223
            },
            {
              "x": "helicopter",
              "y": 123
            },
            {
              "x": "boat",
              "y": 18
            },
            {
              "x": "train",
              "y": 51
            },
            {
              "x": "subway",
              "y": 205
            },
            {
              "x": "bus",
              "y": 11
            },
            {
              "x": "car",
              "y": 206
            },
            {
              "x": "moto",
              "y": 268
            },
            {
              "x": "bicycle",
              "y": 11
            },
            {
              "x": "horse",
              "y": 145
            },
            {
              "x": "skateboard",
              "y": 8
            },
            {
              "x": "others",
              "y": 116
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(20, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 190
            },
            {
              "x": "helicopter",
              "y": 164
            },
            {
              "x": "boat",
              "y": 63
            },
            {
              "x": "train",
              "y": 234
            },
            {
              "x": "subway",
              "y": 51
            },
            {
              "x": "bus",
              "y": 86
            },
            {
              "x": "car",
              "y": 123
            },
            {
              "x": "moto",
              "y": 40
            },
            {
              "x": "bicycle",
              "y": 89
            },
            {
              "x": "horse",
              "y": 5
            },
            {
              "x": "skateboard",
              "y": 8
            },
            {
              "x": "others",
              "y": 7
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(14, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 62
            },
            {
              "x": "helicopter",
              "y": 97
            },
            {
              "x": "boat",
              "y": 7
            },
            {
              "x": "train",
              "y": 253
            },
            {
              "x": "subway",
              "y": 269
            },
            {
              "x": "bus",
              "y": 83
            },
            {
              "x": "car",
              "y": 135
            },
            {
              "x": "moto",
              "y": 166
            },
            {
              "x": "bicycle",
              "y": 155
            },
            {
              "x": "horse",
              "y": 113
            },
            {
              "x": "skateboard",
              "y": 297
            },
            {
              "x": "others",
              "y": 121
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(83, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 114
            },
            {
              "x": "helicopter",
              "y": 168
            },
            {
              "x": "boat",
              "y": 21
            },
            {
              "x": "train",
              "y": 153
            },
            {
              "x": "subway",
              "y": 168
            },
            {
              "x": "bus",
              "y": 243
            },
            {
              "x": "car",
              "y": 209
            },
            {
              "x": "moto",
              "y": 215
            },
            {
              "x": "bicycle",
              "y": 127
            },
            {
              "x": "horse",
              "y": 39
            },
            {
              "x": "skateboard",
              "y": 75
            },
            {
              "x": "others",
              "y": 2
            }
          ]
        }
      ]
      if(!totalSalesLine )return "loanding"
  return (
    <ResponsiveLine
        data={ totalSalesLine}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        margin={{ top: 50, right: 110, bottom: 130, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45,
            legend: 'Semanas',
            legendOffset: 60,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Pacientes',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'dark2' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
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

export default StatChart
