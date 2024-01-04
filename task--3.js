// ------------------------------------task - 3-------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//Print odd numbers in an array


let oddnumbers = function(value){
    for(i=0;i<value.length;i++){
       if((value[i]%2)!=0)console.log(value[i])
    }
}

oddnumbers(1,2,3,4,5,6,7)
//----------------------------------------------------------------------------------------------------------
// Convert all the strings to title caps in a string array


let stringcaps = function(stringval){
    for(let val of stringval){
    console.log(val.toUpperCase())
}
}

stringcaps(["a","b","f","g"])
//------------------------------------------------------------------------------------------------------------
// Sum of all numbers in an array

let sum = function(value){
    let add = 0;
    for(let val of value){
        add += val;

    }
    console.log(add)
}

sum([1,2,3,4,5,6])
//----------------------------------------------------------------------------------------------------------

// Return all the prime numbers in an array

let primenumbers = function(value){
    let arr;
    for(i=0;i<value.length;i++){
        for(j=2;j<value[0];j++){
          
            if(value[i]%j===0){
        
            break;
            }
            
            else {
                 console.log(value[i])
                
        }
    }
    }
    
}
primenumbers([7,8,9,10,32,23])

//-----------------------------------------------------------------------------------------------------------
// Remove duplicates from an array

let duplicates = function(value){
    for(i=0;i<value.length;i++){
        for(j=i+1;j<value.length;j++){
            if(value[i]===value[j]){
                
                for(let k=j;k<value.length;k++){
                    
                    value[k]=value[k+1]
                    
                    
                }
                value.length--
            }
        }

    }
    console.log(value)
}




duplicates([1,2,3,4,5,6,7,8,1,2,3,1,4,2,5])
//----------------------------------------------------------------------------------------------------------------------------------
// Return all the palindromes in an array

let palindrome = function(value){
    let store = '';
    let storage = '';
   
    let newarr = []
    for(a=0;a<value.length;a++){          
        // console.log(value[a])
        let values = value[a].split('')
        console.log(values)
        for(i=0;i<values.length;i++){
             store += values[i]
             
        }

        for(j=values.length-1;j>=0;j--){
            storage += values[j]
        }

        if(store==storage)newarr.push(storage) 

    }
    console.log(newarr)
}

palindrome(['racecar','mom','winner'])

//----------------------------------------------------------------------------------------------
// Rotate an array by k times
function rotateArray(arr, k) {
    
    k = k % arr.length;
    arr.reverse();
 arr.splice(0, k, ...arr.slice(0, k).reverse());

  
    arr.splice(k, arr.length - k, ...arr.slice(k, arr.length).reverse());

    return arr;
}
let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateArray(arr, k)); 

//---------------------------------------------------------------------
// Return median of two sorted arrays of the same size.

function findMedianSortedArrays(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let length = merged.length;
    let median;

    if (length % 2 === 0) {
        median = (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        median = merged[Math.floor(length / 2)];
    }

    return median;
}

let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2)); 
//--------------------------------------------------------------------------------------------------------------------------------------
// Print odd numbers in an array  
let arre = []
let inp = (value)=>{
    for(i=0;i<value.length;i++){
    if(value[i]%2 != 0) arre.push(value[i])
    }
    console.log(arre)
}
inp([1,2,3,4,5])

// -----------------------------------------------------------

// Convert all the strings to title caps in a string array
let arrr = []
let stringarr = (value)=>{
    for(i=0;i<value.length;i++){
        
        arrr.push(value[i].toUpperCase())
    }
    console.log(arrr)

}



stringarr(["adhi","aravind","aswin","ajay"])

//----------------------------------------------------------------
// Sum of all numbers in an array

let sumofnumbers = (values)=>{
    let sum = 0
    let i=0;
    while(i<values.length){
        sum += values[i]
        i++;
    }
    console.log(sum)
}


sumofnumbers([1,2,3,4,5])

//-----------------------------------------------------------------

// Return all the prime numbers in an array


let primenumberss =(value)=>{
    let arr;
    for(i=0;i<value.length;i++){
        for(j=2;j<value[0];j++){
          
            if(value[i]%j===0){
        
            break;
            }
            
            else {
                 console.log(value[i])
                
        }
    }
    }
    
}
primenumberss([7,8,9,10,32,23])
//----------------------------------------------------------------------
// Return all the palindromes in an array

let palindromee = (value)=>{
    let store = '';
    let storage = '';
   
    let newarr = []
    for(a=0;a<value.length;a++){          
        // console.log(value[a])
        let values = value[a].split('')
        console.log(values)
        for(i=0;i<values.length;i++){
             store += values[i]
             
        }

        for(j=values.length-1;j>=0;j--){
            storage += values[j]
        }

        if(store==storage)newarr.push(storage) 

    }
    console.log(newarr)
}

palindromee(['racecar','mom','winner'])

//---------------------------------------------------------------------------------------------
