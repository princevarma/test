var url=require('url');
var add='http://localhost:8080/default.htm?year=2017&month=february';
var data=url.parse(add,true);

//to return host name
console.log("hostname: "+data.hostname);

//to return path name
console.log("pathname: "+data.pathname);

//to return search
console.log("search: "+data.search);

//to return object(json format)
var ob=data.query;
console.log("monthname: "+ob.month);