import { Grid, Grid2 } from "@mui/material";
import { imageURL } from "../../constants/data";
const MidSection = () => {
    
    return (
        <Grid style={{display: "flex" , marginTop:7}} lg={12} md={12} xs={12} container>{
            imageURL.map(image=>(
      
                <Grid  item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} style={{ width: '100%' }} />
                        </Grid>
            ))
            }
            
        </Grid>
)}
export default MidSection