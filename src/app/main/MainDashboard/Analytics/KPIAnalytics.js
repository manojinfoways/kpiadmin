import { useEffect,useState } from "react";
 
import { useDispatch,useSelector } from "react-redux";
import { motion } from 'framer-motion';
 
import Typography from "@material-ui/core/Typography";
import {setToolbarHeader} from "app/store/fuse/toolbarHeaderSlice";
import Widget1 from "./Widget1";
import WordCloude from "./WordCloude";
import BellCurve from "./BellCurve";
import TreeMapLevel from "./TreeMapLevel";
import TreeMapLargeData from "./TreeMapLarge";
import AreaSpline from "./AreaSpline";


let fullcnt = 0;
let parcnt = 0;
const Analytics = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setToolbarHeader('Statistical Analytics'));
    }, [])
    
   

    const container = {
		show: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

    return (
        <div className="w-full">
		    {/* <Widget1  /> */}
            <motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
                <motion.div variants={ item } className="widget flex w-full p-12">
                    <WordCloude  />
                </motion.div>
                <motion.div variants={ item } className="widget flex w-full p-12">
                    <BellCurve  />
                </motion.div>
                <motion.div variants={ item } className="widget flex w-full p-12">
                    <AreaSpline  />
                </motion.div>
                <motion.div variants={ item } className="widget flex w-full p-12">
                    <TreeMapLevel  />
                </motion.div>
                <motion.div variants={ item } className="widget flex w-full p-12">
                    <TreeMapLargeData  />
                </motion.div>
            </motion.div> 
        </div>
    ) 
}

export default Analytics