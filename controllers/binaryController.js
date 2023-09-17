exports.binaryPage = (req, res, next) => {
    res.render("binaryCalc", {
      pageTitle: "binary calculator page",
      decimalValue:'',
      binaryValue:''
    });
  };
  

  exports.binaryToDecimal = (req,res,next) => {
      const binaryVal = req.body.binary;
      
      let binaryArr = [];
      binaryArr = Array.from(binaryVal);
      let constNum = [];
      let values = {};
      let num = 1;
      console.log(binaryArr);
      for (let i = binaryArr.length-1; i >= 0; i--) {
        constNum.push(num);
        num *= 2;

         console.log(num);
         console.log(binaryArr[i]);
      }
      binaryArr.reverse();

      for (let j = 0; j < binaryArr.length; j++) {
         values[constNum[j]] = binaryArr[j];
      }

      let sum = 0;
      for(const key in values){
     //   console.log(key,values[key]);
        if(values[key] == 1){
          sum +=parseInt(key);
        }
      }
     // console.log('the sum is '+sum);
     return res.render("binaryCalc",{
      pageTitle: "binary calculator page",
      decimalValue: sum,
      binaryValue:''
     })

  };

  exports.decimalToBinary = (req,res,next)=> {
   let decimalVal = parseInt(req.body.decimalVal);
   let reminder = [];
   let check = [];
  
   let result = 0;
   let nextNum = 0;

   while (decimalVal >= 1) {
    nextNum = decimalVal;
    result = decimalVal%2;
    reminder.push(result);

    check.push(nextNum);
    nextNum = Math.floor(decimalVal/2);
    decimalVal = nextNum;
   }
   binaryValue = reminder.reverse();
 
  return res.render("binaryCalc",{
    pageTitle: "binary calculator page",
    decimalValue:'',
    binaryValue: binaryValue
   })

  };