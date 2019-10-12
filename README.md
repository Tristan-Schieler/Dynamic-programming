 # Dynamic programming

 ## Problem Description
For this project, you will be given an array of positive integers, data, and a target value, t, and
you will need to count the number of ways that the numbers in data can sum up to t. In the first
variation of the problem, you will count the different orders of the sums as different, while in the
second variation, you will count different orders of the same collection as the same. (This is similar
to the difference between permutations and combinations.) In both problems, you are allowed to
use the same number from data as many times as you want. You may assume that data is sorted
and does not contain any duplicates.

## Installing
* `npm install`

## Run
* Go into package.json and change main to the program you would like to run
* `node .`

## Programs
* niave.js
    * this is the niave solution for the problem with no memoizing
* Dynamic.js
    * this is the dynamic solution to the problem with a map that uses memoizing
* iterative.js
    * this is the iterative solution to the "Order doesn't matter" memoized

## Data
The data can be changed in this program to solve different sets of numbers
* Dynamic.js and iterative.js
    * data variable is set of numbers used to calculate a sum
        * `variables must be kept in accending order`
    * t is the number you would like to sum the parts of data up to
* niave
    * array variable is set of numbers used to calculate a sum
        * `variables must be kept in accending order`
    * value is the number you would like to sum the parts of data up to

## Versioning
The version of this program is purely for testing and education purposes. The maker reserves the right to make updates and bugfixes.