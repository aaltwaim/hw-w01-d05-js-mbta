const stopsBetweenStations = function(fLine, fStop, sLine, sStop){
    if(((fLine==="Red")||(fLine==="Green")||(fLine==="Orange"))&&((sLine==="Red")||(sLine=="Green")||(sLine==="Orange"))){
      
    
    let line = {
      Red:["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
      Green:["Government Center", "Park Street", "Boylston" , "Arlington", "Copley", "Hynes", "Kenmore"],
      Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],
    }
    let stops =0;
   let fStopIndex = line[fLine].indexOf(fStop);
   let sStopIndex = line[sLine].indexOf(sStop);
   if(fLine===sLine){
     stops = Math.abs(fStopIndex-sStopIndex);
     console.log("Rider boards the train at "+fLine+ " Line and "+fStop)
     console.log("Rider arrives at "+sLine +" Line and "+ sStop )
     console.log("Rider exits the train at "+sLine +" Line and "+ sStop)
  
   }else{
     let fStopPSIndex = line[fLine].indexOf("Park Street");
     let sStopPSindex = line[sLine].indexOf("Park Street")
     let stopToPS = Math.abs(fStopIndex-fStopPSIndex);
     let stopFromPS = Math.abs(sStopIndex-sStopPSindex);
     stops = stopToPS + stopFromPS;
     console.log("Rider boards the train at "+fLine+ " Line and "+fStop)
     console.log("Rider arrives at "+fLine+" and Park Street.")
     console.log("Rider transfers from "+fLine+" to "+sLine+" at Park Street.")
     console.log("Rider arrives at "+sLine +" Line and "+ sStop )
     console.log("Rider exits the train at "+sLine +" Line and "+ sStop)
  
   }
  
  return "Number of Stops "+stops
    }
    else{
      return "Please enter a currect line"
    }
  }
  
  
  
  
  
  
  
  
  
  //stopsBetweenStations('Red', 'Davis', 'Red', 'Alewife') // 0 stops
  //stopsBetweenStations('Orange', 'Downtown Crossing', 'Orange', 'Forest Hills')
  //stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
  stopsBetweenStations('Green', 'Park Street', 'Green', 'Kenmore') // 6 stops
  
  
  
  
  
  
  
  
  
  
  //stopsBetweenStations('Red', 'Davis', 'Red', 'Alewife') // 0 stops
  //stopsBetweenStations('Orange', 'Downtown Crossing', 'Orange', 'Forest Hills')
  //stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
  stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
  