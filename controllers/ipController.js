exports.ipPage = (req, res, next) => {
    res.render("ipCalc", {
      pageTitle: "ip calculator page",
    });
  };
  
  exports.IPv4Calculator = (req,res,next)=> {
     const netClass = req.body.netclass;
     const subnetMask = req.body.subnet;
     const ipAddress = req.body.ipaddress;
     console.log(subnetMask);

  const networkDetails = calculateNetworkDetails(ipAddress, subnetMask);
  
  // console.log('Network ID:', networkDetails.networkID);
  // console.log('Broadcast IP:', networkDetails.broadcastIP);
  // console.log('First Host IP:', networkDetails.firstHostIP);
  // console.log('Last Host IP:', networkDetails.lastHostIP);
  // console.log('Next Network:', networkDetails.nextNetwork);
  // console.log('Number of IP Addresses:', networkDetails.numIPAddresses);
  // console.log('CIDR/Subnet:', networkDetails.cidrSubnet);
  
  };
  
  function calculateNetworkDetails(ipAddress, subnetMask) {
   
  }
