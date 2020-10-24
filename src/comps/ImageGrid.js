import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper} from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
  grid: {
    width: '100%',
    margin: '0px'
  }
}));


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  const classes = useStyles();
 

  return (
    <Grid container spacing={2} className={classes.grid}>
      {docs && docs.map(doc => (
         <Grid item xs={12} md={4}>
        <motion.div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc.url)}
        >
         
          <motion.img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
           
        </motion.div>
       </Grid>
      ))}
    </Grid>
    
  )
}

export default ImageGrid;