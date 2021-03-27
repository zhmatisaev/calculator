import React, {useState} from 'react'
export const Calculator2 = () => {
    const [inputValues, setInputValues] = useState({
        input1: 2,
        input2: 2,
})
    const [sum, setResult] = useState({
        result:0
    })
    const inputHandler = (e) => {
        setInputValues(()=>({...inputValues, [e.target.name]:parseInt(e.target.value)}))
    }
    const onPlus = ()=>{
        setResult(()=>({result: parseInt(inputValues.input1) + parseInt(inputValues.input2)}));
    }
    const onMinus = ()=>{
         setResult(()=>({result: parseInt(inputValues.input1) - parseInt(inputValues.input2)}));
    }
    const onMulti = ()=>{
         setResult(()=>({result: parseInt(inputValues.input1) * parseInt(inputValues.input2)}));
    }
    const onDivis = ()=>{
        setResult(()=>({result: parseInt(inputValues.input1) / parseInt(inputValues.input2)}));
    }
    return (<div style={{backgroundColor: 'yellow', width: 350, marginLeft: 50, padding: 20,marginTop:30 }}>
            <h1>Calculate with function {
                
            }</h1>
            <input
            type="number"
            value={inputValues.input1}
            onChange={inputHandler}
            name='input1'
                style={{textAlign: 'center', backgroundColor: 'red', height: 30, width: 80}}
            />
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <button onClick={onMulti}>*</button>
            <button onClick={onDivis}>/</button>
            <input
            type="number"
            value={inputValues.input2}
            onChange={inputHandler}
            name='input2'
            style={{textAlign: 'center',  backgroundColor: 'red', height: 30, width: 80}}
            />
        <h1 style={{ textAlign: 'center', width: 350 }}>Result : {sum.result}</h1>
            </div>
    )
}