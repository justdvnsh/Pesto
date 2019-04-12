# What is searching ??

When we talk about searching algorithms we think about , the Google searching algorithm, but no to mention here that, the google's searching algorithm is one of the most complex algorithms out there , plus their algorithm also makes heavy usage of machine learning to find the results best tailored for a particular person . So, if not Google's search , then what are we talking here ? .

We are talking about the different searching algorithms used to search for a particular item in list or objects . For example, if we want to search for a person , in a given list of array , then we need to search for that particular element in the array. Now obviously, Javascript has pre-built methods for such tasks , such as using __.indexOf()__ method. 

```javascript
let arr = ['one', 'two', 'three', 'four', 'five', 'six']

arr.indexOf('two')
// -> 1

arr.indexOf('seven')
// -> -1
```

We have several methods for searching like - Linear Search , Binary Search , Naive string search etc . So let's dive into them .

#### Linear Search 

So, the very first method to search is the linear search, and this is what the __.indexOf(), .find(), .include()__ etc methods work on . They work on Linear search algorithm , which is pretty simple to comprehend . 

In Linear search we are just searching through all the elements of array of objects until we find what we desire for . So, that means , if the algorithm has to find if there is a particular element in the array, then the algorithm would go linearly and check if there is that element .

The implementation method could have multiple approaches , but the simplest one is the using loop or recursion .

```javascript
let findElement = (arr, val) => {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] === val ) return i;
    }
    return -1;
}
```

So, this is my implementation of __.indexOf()__ method. Which, is doing nothing , but iterating over the array and telling if the ith element of array is equal to the value , then return the index else return -1 .

__Big-O__ for this function or algorithm would be __O(n)__ since , the algorithm is searching linearly , thus providing a linear trend , which means , the algorithm is dependent on input . If there are a million items in the array , the algorithm has to go through all the items to find the one out , if it not present in the array . 

Similar to this algorithm is the Binary search algorithm, which is way better than this algorithm .

#### Binary Search 

```javascript
let binarySearch = (arr, val) => {
    let leftPointer = arr[0]
    let rightPointer = arr[-1]
    let middle = math.round(arr.length / 2)
    while (arr[middle] !== val) {
        if ( val < arr[middle] ) {
            leftPointer = middle - 1
        } else {
            rightPointer = middle + 1
        }
    }

}
```















