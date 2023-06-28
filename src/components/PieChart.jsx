import React, { useMemo } from "react";
import { ResponsivePie } from '@nivo/pie';
import { useTheme } from "@mui/material";
import { useGetSalesQuery,useGetTotalQuery,useGetNinosQuery,useGetTotalesQuery,useGetNinasQuery,useGetMelQuery } from "state/api";
const PieChart = ({ views }) => {
  
  const { data, isLoading } =useGetTotalesQuery();
  let ninos = 0;
  ninos  = useGetNinosQuery();
  let ninas = 0;
  ninas  = useGetNinasQuery();
  let mel = 0;
  mel  = useGetMelQuery();
  var mostrar;
  console.log(data);
  console.log(ninos);
  console.log(ninas);
  console.log(mel);
    //Theme
    const theme = useTheme();

      if (!data || isLoading ||!ninos.isSuccess || !ninas.isSuccess || !mel.isSuccess
        ) return "Cargando...";

  const dataTotales = Object.entries(data).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales
    })
  );
  const dataNinos = Object.entries(ninos.data).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales
    })
  );
  const dataNinas = Object.entries(ninas.data).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales
    })
  );
  const dataMel = Object.entries(mel.data).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales
    })
  );
  if(views === "total" ){
    mostrar=dataTotales;
  }
  if(views === "niños" ){
    mostrar=dataNinos;
  }
  if(views === "niñas" ){
    mostrar=dataNinas;
  }
  if(views === "mel" ){
    mostrar=dataMel;
  }
  console.log(mostrar)
  return (
    <ResponsivePie
    data={mostrar ? mostrar: dataTotales}
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
