import React from "react";

const Totals = ({total}) => {

    const sum = total.map((element) => element.exercises)
    console.log(sum);
    
    const totals = sum.reduce((a, b) => a + b);

    return (
        <strong><p>total of {totals} exercises</p></strong>
    )
}

export default Totals;