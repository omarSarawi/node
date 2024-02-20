const express= require('express')
var app= express();
//var json= require('json')

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function fibonacci(n) {
    if(n==0){
        return 1;
    }
    if(n==1){
        return 1;
    }
    for(;n > 1;n--){
    return fibonacci(n-1) + fib(n-2);
    }
}
function MultiplicationTable(n) {
    const tabel = [];
    for(var i=0;i<=10;i++){
        tabel[i]=i+"×"+n+"="+parseInt(i*n);
    }
    return tabel;
}
function cumulativeSum(arr) {
    if ( arr === 0) return 0;
    let result = 0;
    for (let i = 1; i <= arr; i++) {
        result += i;
    }
    return result;
}

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

app.get('/',function(req,res){
  res.send("start srever")
})

app.get('/fact/:num',function(req,res)
{
    var fact=factorial(req.params.num)
    res.json(fact)
})


app.get('/fib/:num',function(req,res)
{
    var fib =fibonacci(req.params.num)
    res.json(fib)
});

app.get('/Multipli/:num',function(req,res)
{
    var Multipli =MultiplicationTable(req.params.num)
    res.json(Multipli)
});

app.get('/cumulative/:num',function(req,res)
{
    var cumulative =cumulativeSum(req.params.num)
    res.json(cumulative)
});

app.get('/Palindrome/:num',function(req,res)
{
    var Palindrome =isPalindrome(req.params.num)
    res.json(Palindrome)
});


var server= app.listen(7070, function(){
    var host = server.address().address // local one  
    var port = server.address().port 
})