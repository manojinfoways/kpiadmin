import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Autocomplete, Button, MenuItem, TextField } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import _ from "@lodash";
import { useEffect, memo, useState } from "react";
import { fetchChartData47 } from "../../store/chartSlice";

import ReactApexChart from "react-apexcharts";
import { filter } from "lodash";
import Verticle1 from "./Verticle1";

function Verticle2(props) {
	const dispatch = useDispatch();
	

  const chartData = useSelector(({ chart }) => chart.chartData47);
  

  const [chartType, setChartType] = useState("bar");
  let [barData, setBarData] = useState([{ options: [], series: [] }]);
 
 
  const [awaitRender, setAwaitRender] = useState(true);

  const widget = _.merge({}, props.widget);
  const theme = useTheme();

  _.setWith(
    widget,
    "mainChart.options.theme.monochrome.color",
    theme.palette.secondary.main
  );

   

  const filterQuestions = () => {
	  let checkinArray = [ 3, 4, 8, 10, 11 ];
	  console.log("questionsList",questionsList);
	  if (!questionsList) {
				return false;
	  }  
	  let qList = questionsList.filter((i) => {
	 return	checkinArray.includes(i.questionTypeId)
	  })
	  setSurveryQuestions(qList);
	}	
	useEffect(() => {
		barChart();
}, [chartData]);
	useEffect(() => {
		
    setAwaitRender(false);
  }, []);
 
  const barChart = () => {
	let labels = chartData.map(function (el) { return el.title; });
		let response_count = chartData.map(function (el) { return parseFloat(el.response_count); });
		let response_percentage = chartData.map(function (el) { return parseFloat(el.response_percentage); });
		let colors = [ '#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a','#ff7c43','#ffa600' ];

 setBarData({
	id: 'widget1',
	series: {
	  2022: [
		{
		  name: 'Count',
		  data: response_count,
		  fill: 'start',
		},
	  ],
	},
	options: {
	  chart: {
		type: 'area',
		height: '100%',
		background: 'transparent',
		toolbar: {
		  show: false,
		},
		zoom: {
		  enabled: false,
		},
	  },

	  theme: {
		mode: 'dark',
	  },
	  dataLabels: {
		enabled: false,
	  },
	  tooltip: {
		// x: {
		//   format: 'dd/MM/yy',
		// },
	  },
	  xaxis: {
		categories: labels,
		tooltip: {
		  enabled: false,
		},
		axisBorder: {
		  show: false,
		},
	  },
	  yaxis: {
		axisBorder: {
		  show: false,
		},
	  },
	  markers: {
		size: 3,
		strokeWidth: 1.5,
		strokeOpacity: 1,
		strokeDashArray: 0,
		fillOpacity: 1,
		shape: 'circle',
		radius: 2,
		hover: {
		  size: 5,
		},
		"colors":[
		  "#22d3ee"
		  ],
		  "strokeColors":[
		  "#fff"
		  ]
	  },
	  fill: {
		type: 'solid',
		opacity: 0.7,
		gradient: {
		  shadeIntensity: 0.4,
		  opacityFrom: 1,
		  opacityTo: 0.5,
		  stops: [30, 100, 100],
		},
		colors: ['#22d3ee'],
	  },
	  grid: {
		show: true,
		strokeDashArray: 3,
		position: 'back',
		xaxis: {
		  lines: {
			show: true,
		  },
		},
		yaxis: {
		  lines: {
			show: true,
		  },
		},
		padding: {
		  top: 0,
		  right: 0,
		  bottom: 0,
		  left: 0,
		},
	  },
	  stroke: {
		show: true,
		curve: 'smooth',
		colors: ['#000'],
		lineCap: 'butt',
		width: 1.5,
		dashArray: 0,
	  },
	},
  });
}	  
	
	const barChart2 = () => {
		let labels = chartData.map(function (el) { return el.title; });
		let response_count = chartData.map(function (el) { return parseFloat(el.response_count); });
		let response_percentage = chartData.map(function (el) { return parseFloat(el.response_percentage); });
		let colors = [ '#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a','#ff7c43','#ffa600' ];
	 setBarData({
          
		 series: [ {
			name: 'Count',
		  data: response_count
		}],
		options: {
		  chart: {
			height: 300,
			type: 'bar',
			events: {
			  click: function(chart, w, e) {
			  }
			}
		  },
		  colors: colors,
		  plotOptions: {
			bar: {
			  columnWidth: '45%',
			  distributed: true,
			}
		  },
		  dataLabels: {
			enabled: false
		  },
		  legend: {
			show: false
		  },
		  xaxis: {
			categories: labels,
			labels: {
			  style: {
				colors: colors,
				fontSize: '12px'
			  }
			}
		  }
		},
	  
	  
	  });
  }	
 

	useEffect(() => {
			dispatch(fetchChartData47(47)).then(() => {
				barChart();
			}).catch(() => {
				barChart();
			});
		 
	}, [  ]);
	 

	if (awaitRender) {
    return null;
  }
	

  return (
	  <Paper className="w-full rounded-20 shadow blkback">
		  <div className="flex flex-col items-center m-20 sm:items-start mb-16 sm:mb-0">
              <Typography className="h2 font-medium whitecolorFnt" color="textPrimary">
			  Government services needed
			  </Typography>
			  </div>
		  <div className="h-350 w-full">
			 { barData.options   ?
				//    <ReactApexChart
				//    options={barData.options}
				//    series={barData.series}
				//    type="bar"
				//    width="100%"
				//    height={300}
				//   />
				  <ReactApexChart
				  options={barData.options}
				  series={barData.series['2022']}
				  type='area'
				  height={300}
				/>
			  :null
			  }
			 
      </div>
    </Paper>
  );
}

export default memo(Verticle2);
