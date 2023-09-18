exports.webBandPage = (req, res, next) => {
    res.render("webBandwidthCalc", {
      pageTitle: "Web bandwidth calculator page",
      speedValue:''
    });
  };
  

  exports.calculateBandwidth = (req,res,next) => {
     const fileSize = parseInt(req.body.fileSize);
     const fileUnit = req.body.fileUnit;
     const speed = parseInt(req.body.speed);
     const unitPerSecond = req.body.unitPerSecond;

     console.log(fileSize," ",fileUnit," ",speed," ",unitPerSecond);

     const unitSizeConverter = (fileSize,fileUnit) => {
        if(fileUnit == 'B') {
          return fileSize * 8;
        } else if(fileUnit == 'KB'){
          return fileSize * 1024;
        } else if(fileUnit == 'MB'){
          return fileSize * 1048576;
        }else if(fileUnit == 'GB'){
          return fileSize * 1073741824;
        }
     }
     
    const unitSpeedConverter = (speed,unitPerSecond) => {
    
      if(unitPerSecond == 'b/s'){
        return speed;
      } else if(unitPerSecond == 'k/s'){
        return speed * 1000;
      }else if(unitPerSecond == 'm/s'){
        return speed * 1000000;
      }else if(unitPerSecond == 'g/s'){
        return speed * 1000000000;
      }
    }
  
    const fileSizeValue = unitSizeConverter(fileSize,fileUnit);
    const speedValue = unitSpeedConverter(speed,unitPerSecond);

    const timeConverter = (second)=> {
      let [minute, hour, day,month,year] = [0, 0, 0,0,0];

      if(second >= 60 && second < 3600){
          minute = second / 60;
          return minute.toFixed(2) + ' minute';
      }else if(second >= 3600 && second < 86400){
          hour = second / 3600; 
          return hour.toFixed(2) + ' hour';
      }else if(second >= 86400 && second < 2592000){
          day = second / 86400;
          return day.toFixed(2) + ' day';
      }else if(second >= 2592000 && second < 31557600){
        month = second / 2592000;
        return month.toFixed(2) + ' month';
    }else if(second >= 31557600){
        year = second / 31557600;
        return year.toFixed(2) + ' year';
    }else{
        return second.toFixed(2) + ' seconds';
      }
    }
    
    const speedResult = fileSizeValue/speedValue;
    
    const convertSecond = timeConverter(speedResult);
    console.log(convertSecond);

    return res.render("webBandwidthCalc",{
      pageTitle: "Web bandwidth calculator page",
      speedValue:convertSecond,
     })

  };