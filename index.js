// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log( Array.isArray(a));
console.log(Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
var b = a.map(x=>x*5);

console.log(b);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var colors2='';
console.log(colors)
concatValue("+");
console.log(colors2);
colors2="";
concatValue(",");
console.log(colors2);

function concatValue(delimiter){
for(let i=0;i<colors.length;i++){
    colors2+=colors[i];
    if(i<colors.length-1){
    colors2+=delimiter;
    }
}

}

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort();
console.log(a.sort(function(a, b){return b - a}));

//Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

var frequent = a[0];
var curr_count=0;
var prev_count=0;


for(var i=0;i<a.length;i++){
    var curr_count=0;
    for(var j=0;j<a.length;j++){
        if(a[i]==a[j]){

            curr_count++;

        }

        if(curr_count>prev_count){
            prev_count=curr_count;
            frequent=a[i];

        }

    }

}

console.log(frequent);


