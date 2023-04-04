import { capitalize } from "@mui/material"

const ErrorMessage=({children})=>{
    return(
        <div
            style={{
                width:"100%",
                padding:10,
                marginBottom:10,
                boderRadius:4,
                backgroundColor: "orange",
                textAline:"center" ,
                color:"white",
                textTransform:capitalize

            }}
            >
                {children}
        </div>
    );
};
export default ErrorMessage;