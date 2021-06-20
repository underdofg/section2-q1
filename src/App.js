import React, { useEffect, useState } from "react";


const App = () => {
  const [count, setCount] = useState("")
  const [intType, setIntType] = useState("0");
  const [txt, setTxt] = useState("...")
  
   useEffect(() => {
    let timeout = setTimeout(() => {
      const result =  filterValue(count);
      if(result !== undefined) setCount(result);
    }, 1000);
    
    return () => {
      clearTimeout(timeout)};
   }, [count]);


   useEffect(() => {
    if(!count) setTxt('...')
    let timeout = setTimeout(() => {
      computeNumber();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
   }, [count, intType]);


  const computeNumber = () => {
    const number = parseInt(count);
    if (intType == "0" && number !== NaN) {
      if(number === 0) setTxt("False");
      if(number === 1) setTxt("False");
      if(number === 2) setTxt("True");
      if(number === 3) setTxt("True");
        for (let i = 2, sqt = Math.sqrt(number); i <= sqt; i++) {
          console.log(`HAVE i == ${i} , HAVE NUMBER == ${number} AND n%i = ${number % i === 0}`);
          if (number % i === 0) {
            setTxt("False");
            return;
          } else {
            setTxt("True");
          }
      }
    } else if (intType == "1" && number !== NaN) {
      console.log("number is Fibo ===>", number);
      if(number === 2 || number === 1 || number === 0 ) {
          setTxt("True");
          return
      } else {
        let n1 = 0, n2 = 1 , nextTerm;
        nextTerm = n1 + n2;
        for (let i =1; i <= number; i++) {
         n1 = n2;
         n2 = nextTerm;
         nextTerm = n1 + n2;
         console.log("n1 ==>", n1);
         console.log("n2 ==>", n2);
         console.log("next ==>", nextTerm);
         if(nextTerm > number) {
           if(n2 === number) {
             setTxt("True");
             break;
          } else {
              setTxt("False");
           }
           break;
          }
        }
      }
    }
  }

  const filterValue = (val) => {
    val = String(val)
    const iOfNegative = val.indexOf("-")
    let result; 
    if (iOfNegative === 0) {
      console.log(' in Zero ')
      result = '1'
      return result 
    } else {
      const roundNumnerWithOutDecimal = val.match(/\d+/g);
      const roundNumnerWithDecimal = val.match(/\d+\.\d\d+/g);
      if (roundNumnerWithOutDecimal !== null) {
        if (roundNumnerWithDecimal !== null) {
          const tmpVal = roundNumnerWithDecimal[0];
          const decimalVal = tmpVal.split(".")[1];
          const intVal = tmpVal.split(".")[0];
          const decimalPoint = decimalVal.length;
          let val = parseInt(intVal);
          console.log("decimalPoint ==>", decimalPoint);
          if (parseInt(decimalVal) > 5 * 10 ** (decimalPoint - 1)) {
            val += 1;
            result = val;
          } else {
            result = val
          }
        } else {
           result = roundNumnerWithOutDecimal[0];
        }
      } else return ''
    }
    return result
  };


  const onChangeIntTpye = (e) => {
      setIntType(e.target.value)
  }

  return (
    <div
      style={{
        width: "auto",
        height: "100vH",
        display: "grid",
        gridTemplateColumns: "200px auto 300px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          height: "100 vh",
        }}
      >
        <input
          style={{
            border: "1px solid black",
            height: "100 vh",
          }}
          type="text"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          border: "1px solid black",
          height: "100 vh",
        }}
      >
        <select value={intType} onChange={onChangeIntTpye}>
          <option value="0">isPrime</option>
          <option value="1">IsFibanacci</option>
        </select>
      </div>
      <div
        style={{
          border: "1px solid black",
          height: "100 vh",
        }}
      >
        <span>{txt}</span>
      </div>
    </div>
  );
};;


const statusOptions = [{
  
}]

export default App;
