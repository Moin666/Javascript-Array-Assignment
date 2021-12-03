////////Task#1 Declare and initialize a multidimensional array

var multiDimArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
console.log(multiDimArr)


//Task#2 Write a program to print numeric counting from 1 to 10.
for(var i = 1; i < 11; i++){
    console.log(i)
}


//Task#3 Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user
var numbr = +prompt("Enter Multiplication of Nuber");
var numLength = +prompt("Enter Length of Table");

for(var i = 1; i <= numLength; i++){
    var result =  numbr * i;
    console.log( numbr,"*",i,"=",result)
}

// Task#4 Write a program to print items of the following array using for loop:
var fruit = ["Apple", "Mango", "Orange", "StrawBerry"];
for(var i =0; i < fruit.length;i++){
    console.log(fruit[i])
}


// Task# 5 Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//a
for(var i = 0; i < 16; i++){
    console.log(i);
}
//b
for(var z= 10; z > 0; z--){
    console.log(z)
}
//c
for(var j = 0 ;j < 21; j++){
    if(j % 2 == 0){
        console.log(j)
    }
}
//d
for(var j = 0 ;j < 21; j++){
    if(j % 2 != 0){
        console.log(j)
    }
}
//e
for(var j = 1 ;j < 21; j++){
    if(j % 2 == 0){
        console.log(j+"k")
    }
}


//Task# 11 You have an array Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

var myArr = ["Apple", "Mango", "Orange", "StrawBerry"];
var userPick = prompt("Enter your Favorate Fruit to match");

for(var i = 0; i < myArr.length; i++){
    if(myArr[i] == userPick){
        console.log("Cokkie is Available at index",i)
    }
}

// Task# 12 Write a program to identify the largest number in the given array.
var tempLarg = 0; 
var arrayNum = [24, 53, 99,74 ]
for(var i= 0; i < arrayNum.length; i++){
    for(var j = 0 ; j < arrayNum.length; j++){
        console.log(arrayNum.length)
        if(arrayNum[i] > arrayNum[j] ){       
            tempLarg = arrayNum[i]
        }
    }
}
console.log(tempLarg)

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var temp = 0;

array.forEach(function(num){
    if(temp < num){
        temp = num;
    }
})
console.log(temp)

// Task# 13 Write a program to identify the largest number in the given array.

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var temp = 3;



array.forEach(function(num){
    if(temp > num){
        temp = num;
        console.log(temp);

    }
})

console.log(temp)