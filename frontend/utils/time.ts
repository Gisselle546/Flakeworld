import moment from 'moment';

export function time(date:any){

 

    
  return (moment(date).calendar().includes("Today"))? moment(date).fromNow():moment(date).format("MMM Do ")
    

}


export function longtime(date:any){
  return moment(date).format("LT \u00B7 ll" ); 
}


export function long(date:any){
  return moment(date).format("ll" ); 
}

export function  longprofiletime(date:any){
  return moment(date).format('MMM YYYY')
}