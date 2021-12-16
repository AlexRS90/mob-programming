function getMoneySpent(keyboards, drives, b) {
    let maxValue=[];
    for(let i=0;i<keyboards.length;i++){
      for(let j=0;j<drives.length;j++){
          if(keyboards[i]+drives[j]<=b)
          maxValue.push(keyboards[i]+drives[j]);    
      }
    }
    if(maxValue.length>0){
     return Math.max(...maxValue);
    } else {
      return -1;
    }    
}
