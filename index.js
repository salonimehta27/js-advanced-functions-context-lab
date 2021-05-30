/* Your Code Here */
function createEmployeeRecord(empArr)
{
    const obj={
        firstName:empArr[0],
        familyName:empArr[1],
        title:empArr[2],
        payPerHour:empArr[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return obj;
}
let createEmployeeRecords= function(arrOfArr){
return arrOfArr.map(x=>createEmployeeRecord(x));
}
//dateStamp "YYYY-MM-DD HHMM"
let createTimeInEvent= function(dateStamp){
    let spl=dateStamp.split(" ");
    this.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(spl[1],10),
        date:spl[0]
    })
    return this
}
let createTimeOutEvent= function(dateStamp){
    let spl=dateStamp.split(" ");
    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(spl[1],10),
        date:spl[0]
    })
    return this
}
//dateForm ="YYYY-MM-DD"
let hoursWorkedOnDate= function(dateForm){
 const inEvent=this.timeInEvents.find(x=>x.date===dateForm);
 const outEvent=this.timeOutEvents.find(x=>x.date===dateForm);
 const totalHoursWorked=(outEvent.hour-inEvent.hour)/100
 return totalHoursWorked;
}

let wagesEarnedOnDate= function(dateForm)
{
    return this.payPerHour*hoursWorkedOnDate.call(this,dateForm);
}

let findEmployeeByFirstName=function(srcArray,firstName){
    return srcArray.find(x=>x.firstName===firstName);
   }
   
let calculatePayroll= function(arr){
    return arr.reduce((accum,x)=>accum+allWagesFor.call(x),0);
   }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

