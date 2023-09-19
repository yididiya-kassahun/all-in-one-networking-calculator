exports.generatorPage = (req, res, next) => {
    res.render("passGenerator", {
      pageTitle: "password generator page",
      resultPassword:' '
    });
  };
  
  const randomVal = {
    lower : getRandomLowerCaseLetter,
    upper : getRandomUpperCaseLetter,
    number : getRandomNumber,
    symbol : getRandomSymbol
  };

exports.passGenerate = (req,res,next) => {
  const passwordLeng = req.body.passLength;
  let lower = req.body.lower;
  let upper = req.body.upper;
  let number = req.body.number;
  let symbol = req.body.symbol;

  lower = lower === 'on' ? 1 : 0;
  upper = upper === 'on' ? 1 : 0;
  number = number === 'on' ? 1 : 0;
  symbol = symbol === 'on' ? 1 : 0;
  

const resultPassword = generatePassword(lower,upper,number,symbol,passwordLeng);
console.log('generated pass '+resultPassword);


  return  res.render("passGenerator", {
    pageTitle: "password generator page",
    resultPassword:resultPassword
  });

 }

function getRandomLowerCaseLetter(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCaseLetter(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
  const symbols = '!%@#~{}/,.*&^<>=';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lower,upper,number,symbol,passwordLeng){
     let generatedPassword = '';
     const typesCount = lower + upper + number + symbol;

     const typeArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0]);

     if(typesCount === 0){
      return '';
     }
//console.log('types count '+typesCount);
     for (let i = 0; i < passwordLeng; i += typesCount) {
      typeArr.forEach(type => {
        const names = Object.keys(type)[0];
        generatedPassword += randomVal[names]();
      });
     }
     //console.log('generated pass '+generatedPassword);
     return generatedPassword;
}