exports.ipPage = (req, res, next) => {
    res.render("ipCalc", {
      pageTitle: "ip calculator page",
      ipAddress:'',
      subnets:'',
      hosts: '',
      usableHosts:'',
      networkClass:'',
      subnetMask:'',
      hostRange:'',
      networkAddress:'',
      usableIpRange:''
    });
  };
  
  exports.IPv4Calculator = (req,res,next)=> {
     const netClass = req.body.netclass;
     const subnetMask = req.body.subnet;
     const ipAddress = req.body.ipaddress;
     console.log("network class "+netClass+" subnetmask "+subnetMask+" ip address "+ipAddress);
  
  const networkDetails = calculateNetworkDetails(ipAddress, subnetMask);
  const calculateSubnet = calculateSubnetMask(subnetMask);
  const networkClass = getIpAddressClass(ipAddress);

 // const usableIpRange = 
  console.log(networkDetails);

  //console.log(calculateSubnet,networkClass);
  
  return res.render("ipCalc",{
    pageTitle: "Ip calculator page",
    ipAddress:ipAddress,
    subnets:calculateSubnet.subnets,
    hosts: calculateSubnet.hosts,
    usableHosts:calculateSubnet.usableHosts,
    subnetMask:calculateSubnet.subnetMask,
    networkClass:networkClass,
    hostRange:calculateSubnet.hostRange,
    networkAddress:networkDetails.networkAddress,
    usableIpRange:networkDetails.usableIpRange
   })
  };
  
  function calculateNetworkDetails(ipAddress, subnetMask) {
     // network address
     const octets = ipAddress.split('.');
     octets[3] = 0;
     const networkAddress = octets.join('.');

     const firstIpArr = [...octets];
     firstIpArr[3] = 1;

     const lastIpArr = [...octets];
     lastIpArr[3] = 254;
     const usableIpRange = [firstIpArr.join('.'),' - ',lastIpArr.join('.')];
    
     return netDetails = {
      networkAddress:networkAddress,
      usableIpRange:usableIpRange
     };
  }

  function getIpAddressClass(ipAddress){
    
      // Split the IP address into octets
      const octets = ipAddress.split('.');
    
      // Convert the first octet to a number
      const firstOctet = parseInt(octets[0]);
    
      if (firstOctet >= 1 && firstOctet <= 126) {
        return 'Class A';
      } else if (firstOctet >= 128 && firstOctet <= 191) {
        return 'Class B';
      } else if (firstOctet >= 192 && firstOctet <= 223) {
        return 'Class C';
      } else if (firstOctet >= 224 && firstOctet <= 239) {
        return 'Class D (Multicast)';
      } else if (firstOctet >= 240 && firstOctet <= 255) {
        return 'Class E (Experimental)';
      } else {
        return 'Invalid IP Address';
      }
    }

  function calculateSubnetMask(inputSubnet) {
      // Input subnet and subnet mask in CIDR notation
//const inputSubnet = "192.168.1.0/25";
const subnetParts = inputSubnet.split("/");
const subnetIP = subnetParts[0];
const subnetMask = subnetParts[1];

const subnets = subnetIP.split(".");

console.log(subnets);

let index = [];
for (let i = 0; i < subnets.length; i++) {
  if(parseInt(subnets[i]) < 255){
      index.push(i);
  }
}

console.log('here are indexs '+index);

let reminder = [];
let check = [];
let theIp = [];

let [result,nextNum,countOnes,countZeros,decimalVal] = [0,0,0,0,0];

for (let j = 0; j < index.length; j++) {

 // console.log("subnets "+subnets[index[j]]);
 
if(subnets[index[j]] == 0){
  theIp[j] = [0,0,0,0,0,0,0,0];
 // console.log(theIp[j]);

}else if(subnets[index[j]] < 255 ){
  decimalVal = subnets[index[j]];

  while (decimalVal >= 1) {
   nextNum = decimalVal;
   result = decimalVal%2;
   reminder.push(result);

   check.push(nextNum);
   nextNum = Math.floor(decimalVal/2);
   decimalVal = nextNum;
  }
  //console.log(reminder.reverse());
  theIp[j] = reminder;
}

}

for (let i = 0; i < theIp.length; i++) {
  for (let j = 0; j < theIp[i].length; j++) {
  if (theIp[i][j] === 1) {
    countOnes++;
  }
}
}

for (let k = 0; k < theIp.length; k++) {
  for (let x = 0; x < theIp[k].length; x++) {
  if (theIp[k][x] === 0) {
    countZeros++;
  }
}
}
//console.log(countOnes);
const subnetNo = Math.pow(2, countOnes);
const hostNo = Math.pow(2, countZeros);
const usableHostNo = Math.pow(2, countZeros)-2;
const hostRange = [0,' - ',hostNo-1];

return details = {
  subnets:subnetNo.toLocaleString(),
  hosts:hostNo.toLocaleString(),
  usableHosts:usableHostNo.toLocaleString(),
  subnetMask:subnetMask,
  hostRange:hostRange
}
// console.log("no. of subnets "+subnetNo.toLocaleString());
// console.log("no. of hosts  "+hostNo.toLocaleString());
// console.log("no. of usable hosts  "+usableHostNo.toLocaleString());

  }

  exports.IPv6Calculator = (req,res,next) => {
    const prefix = req.body.prefix;
    const ipv6 = req.body.ipv6;

    console.log(prefix,ipv6);
  }