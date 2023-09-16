exports.binaryPage = (req, res, next) => {
    res.render("binaryCalc", {
      pageTitle: "binary calculator page",
      decimalValue:0
    });
  };
  

  exports.binaryToDecimal = (req,res,next) => {
      const binaryVal = req.body.binary;
      
      let binaryArr = [];
      binaryArr = Array.from(binaryVal);
      let constNum = [];
      let values = {};
      let num = 1;
      for (let i = binaryArr.length-1; i >= 0; i--) {
         num *= 2;
         constNum.push(num);

        //  console.log(num);
        //  console.log(binaryArr[i]);
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
      decimalValue: sum
     })

  };