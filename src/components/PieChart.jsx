import React, { useMemo } from "react";
import { ResponsivePie } from '@nivo/pie';
import { useTheme } from "@mui/material";
import { useGetSalesQuery,useGetTotalQuery,useGetNinosQuery } from "state/api";
const PieChart = ({ views }) => {
  const { data, isLoading } = useGetNinosQuery();
  let data1  = 0;
  data1  = useGetTotalQuery();
  
  
  console.log(data1);
    //Theme
    const theme = useTheme();

    const dataPie1 = [
        {
          "id": "scala",
          "label": "scala",
          "value": 122,
          "color": "hsl(45, 70%, 50%)"
        },
        {
          "id": "ruby",
          "label": "ruby",
          "value": 242,
          "color": "hsl(37, 70%, 50%)"
        },
        {
          "id": "css",
          "label": "css",
          "value": 365,
          "color": "hsl(305, 70%, 50%)"
        },
        {
          "id": "python",
          "label": "python",
          "value": 189,
          "color": "hsl(282, 70%, 50%)"
        },
        {
          "id": "rust",
          "label": "rust",
          "value": 537,
          "color": "hsl(206, 70%, 50%)"
        }
      ]

      const dataPie2 = [
        {
          "id": "hack",
          "label": "hack",
          "value": 504,
          "color": "hsl(114, 70%, 50%)"
        },
        {
          "id": "python",
          "label": "python",
          "value": 285,
          "color": "hsl(235, 70%, 50%)"
        },
        {
          "id": "lisp",
          "label": "lisp",
          "value": 542,
          "color": "hsl(291, 70%, 50%)"
        },
        {
          "id": "css",
          "label": "css",
          "value": 58,
          "color": "hsl(116, 70%, 50%)"
        },
        {
          "id": "php",
          "label": "php",
          "value": 162,
          "color": "hsl(66, 70%, 50%)"
        }
      ]
      const colors = [
        theme.palette.secondary[500],
        theme.palette.secondary[300],
        theme.palette.secondary[400],
        theme.palette.secondary[200],
        theme.palette.secondary[600],
        theme.palette.secondary[800],
        theme.palette.secondary[700]
      ];
      const formattedData = Object.entries(data).map(
        ([category, sales], i) => ({
          id: category,
          label: category,
          value: sales,
          color: colors[i],
        })
      );
  return (
    <ResponsivePie
    data={views === "total" ? formattedData: dataPie2}
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
            color: 'black',
          },
        },
      }}
    colors={{ scheme: 'set1' }}
    margin={{ top: 40, right: 80, bottom: 150, left: 80 }}
    innerRadius={0.45}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={25}
    borderWidth={1}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor= { theme.palette.secondary[200] }
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={ "#d4d4d4" }
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'ruby'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'c'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'go'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'python'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'scala'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'lisp'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'elixir'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'javascript'
            },
            id: 'lines'
        }
    ]}
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 75,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
/>  
  )
}

export default PieChart
