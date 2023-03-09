import React from 'react'
import { Radio,RadioGroup, FormControlLabel } from '@mui/material';


const Options = ({selectedValue,setSelectedValue,options,previousAnswer,setPreviousAnswer}) => {


    const handleRadioChange = (event) => {
        setPreviousAnswer("")
        setSelectedValue(event.target.value);
      }; 
      

  return (
    <RadioGroup sx={{
      marginTop:'1.3rem',
    }}
    onChange={handleRadioChange}
    value={selectedValue}
    >

 { options?.map((option,index)=>(

<FormControlLabel
        key={index}
        value={option}
        control={<Radio checked={previousAnswer? previousAnswer === option :selectedValue === option }  sx={{ color: '#fff', '&.Mui-checked': { color: '#54bab9' }}} />}
        label={option}
        className='option'
      />

 )) 
 }
  
    </RadioGroup>

  )
}

export default Options

