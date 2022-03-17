import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import moment from "moment";

import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
 
import { Autocomplete, Button, MenuItem, TextField } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import _ from "@lodash";
import { useEffect, memo, useState } from "react";
import { fetchLocationStateCount,fetchLocationLengend } from "../../store/surveySlice";

import ReactApexChart from "react-apexcharts";
import { filter } from "lodash";

function LocationChart(props) {
	const dispatch = useDispatch();
	

  const legendList = useSelector(({ survey }) => survey.legendList);
  const locationStateCountList = useSelector(({ survey }) => survey.locationStateCountList);
  
  const [surveyId, setSurveyId] = useState(7);
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));

  const [awaitRender, setAwaitRender] = useState(true);

  const widget = _.merge({}, props.widget);
  const theme = useTheme();

  _.setWith(
    widget,
    "mainChart.options.theme.monochrome.color",
    theme.palette.secondary.main
  );

   
	const getStatCount = (key) => {
		let finddata = locationStateCountList.find((i) => {return i.status == key });
		console.log(locationStateCountList,'@',finddata,'#@',key);
		if (finddata) {
			return finddata.total;
		} else {
			return 0;
		}
	}
  
	useEffect(() => {

		let payload = {
			surveyId: surveyId,
			startDate: startDate,
			endDate:endDate
		}
		dispatch(fetchLocationStateCount(payload))
      .then(() => {})
      .catch(() => {});
	  dispatch(fetchLocationLengend())
      .then(() => {})
      .catch(() => {});
		 
		
    setAwaitRender(false);
  }, []);
 
   

 
 
 
	 
	

  return (
	  <Paper className="w-full rounded-20 shadow">
		  <Typography className="h2 font-medium m-20 " color="textPrimary">
		  Intake Locations Today
		</Typography>
      <Grid
        container
        rowSpacing={2}
        className="m-20 p-20"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
			  { legendList && locationStateCountList && legendList.map((i,index) => {
				  
				  return <Grid item xs={6} sm={4} md={3} lg={3}>
				  <Card className="w-full rounded-20 shadow" >
			<div className="p-20 pb-0">
							  <Typography className="h3 font-medium" ><span style={{color:`${i.color}`,fontWeight:"bold"}}>o</span> { i.title } </Typography>
				<div className="flex flex-row flex-wrap items-center mt-12">
					<Typography className="text-48 font-semibold mb-20 leading-none tracking-tighter">
                    {getStatCount(i.key)}
					</Typography>

					<div className="flex flex-col mx-8 m-20">
							<div className="flex items-center">
							<Typography className="font-semibold" color="textSecondary">
								
							</Typography>
							 
						</div>
					</div>
				</div>
			</div>
					  </Card>
					  </Grid>
			  	})
			  }
		 
			 
        
         
      </Grid>
		   
    </Paper>
  );
}

export default memo(LocationChart);
