## Part1a
1. values added: 20. Because line 7 is executed with num1=10 and num2=10
2. final result: 20. Because result can be accessed within the function, result in the if clause is the same as the result outside.
3. values added: 20. Because result is defined and the sum of num1=10 and num2=10 is assigned to result.
4. ReferenceError: result is not defined. Because when result is declared using let, result is only visible and accessible in the if clause. When we try to use result outside the if clause, compiler gives an error because we don't have result defined in the scope.
5. TypeError: Assignment to constant variable. Because result is declared using const, value of result cannot be changed.
6. ReferenceError: discountedPrice is not defined. Because discountedPrice is declared in the for loop using let, it is not visible and accessible outside the for loop. Therefore, discountedPrice is not defined is outputed.

## Part1b
1. 3 is printed. Because i is declared using var, it is accessible and visible within the function. Therefore, the value of i when we get out of the for loop, which is the length of prices 3, is printed.
2. 150 is printed. Because the discountedPrice is declared using var, it is accessible and visible within the function. line 13 will print the discountedPrice we calculated when i=2: discountedPrice=300*0.5=150.
3. 150 is printed. Because finalPrice is declared using var, it is accessible and visible within the function. line 14 will print the finalPrice we calculated when i=2: finalPrice=Math.rount(150*100)/100=150
4. This function will return discounted, which is an array contain discounted prices that are calculated based on the array of prices and discount rate. This function receives an array of prices and a discount rate as input. With that input, the function uses a for loop to calculate the discounted price based on the discount rate for each price in the array of prices and round down the prices to have at most 3 significant figures if needed. This function uses var to declare discountedPrice so that discountedPrice is also accessible outside the for loop.
5. ReferenceError: i is not defined. Because i is declared using let in the scope of the for loop, we cannot access i once we get out of the for loop. Therefore, i is not defined outside the for loop.
6. ReferenceError: discountedPrice is not defined. Because discountedPrice is declared using let in the scope of the for loop, we cannot access i once we get out of the for loop. Therefore, discountedPrice is not defined outside the for loop.
7. 150 is printed. Because finalPrice is defined outside the for loop and within the function using let, finalPrice is accessible and visible within the function. Therefore, finalPrice for the last element of the array of prices is computed and assigned to finalPrice, which is Math.round(150*100)/100=150, and finalPrice 150 is printed.
8. This function will return discounted, which is an array contain discounted prices that are calculated based on the array of prices and discount rate. This function receives an array of prices and a discount rate as input. With that input, the function uses a for loop to calculate the discounted price based on the discount rate for each price in the array of prices and round down the prices to have at most 3 significant figures if needed. What this version of discountPrices is different from the previous version is that this version uses let to declare discountedPrice so that discountedPrice is not accessible outside the for loop.
9. ReferenceError: i is not defined. Because i is declared in the for loop using let, i is not accessible and visible outside the for loop. Therefore, i is not defined outside the for loop. So, error is given.
10. 3 is printed. length is declared within the function using const and the length of the array of prices, 3, is assigned to length. length is visible within the function. Therefore, 3 is printed.
11. This function will return discounted, which is an array contain discounted prices that are calculated based on the array of prices and discount rate. This function receives an array of prices and a discount rate as input. With that input, the function uses a for loop to calculate the discounted price based on the discount rate for each price in the array of prices and use a const discounted array to store the discountedPrice. By using const, the discounted array cannot be reassigned a new array, but the values in the array can be changed. By using const to declare the discountedPrice, this function ensures that the value of discountedPrice cannot be changed in each execution of the for loop once the discountedPrice is assigned a value.
12. A. student.name<br/>
    B. student['Grad Year']<br/>
    C. student.greeting()<br/>
    D. student['Favorite Teacher'].name<br/>
    E. student.courseLoad[0]<br/>
13. A. '32' because intergers map to their string representation and '3' concates '2' gives '32'<br/>
    B. 1 because '3' automatically convert to numeric 3 so that we can do subtraction. - can only be subtraction and thus the string is converted numeric value<br/>
    C. 3 because null is converted to 0 as a numeric value<br/>
    D. '3null' because null is converted to the string representation of null 'null'. '3' concates with 'null' gives '3null'<br/>
    E. 4 because true is converted to 1 as a numeric value and 1+3 gives 4.<br/>
    F. 0 because false is converted to 0 as a numeric value and null is converted to 0 as a numeric value as well. Thus, 0+0 gives 0<br/>
    G. '3undefined' because undefined is converted to its string representation 'undefined', '3' concates 'undefined' gives '3undefined'<br/>
    H. NaN because '3' is converted to its numeric value of 3 and undefined is converted to NaN. Arithmetic operations with NaN will result in NaN<br/>

14. A. true because when comparing values of different types, values are always converted to numeric values. Therefore, 2>1 return true.<br/>
    B. false because '2' is greater than '12' alphabetically. '2' starts with letter t and '12' starts with letter o and t is greater than o alphabetically<br/>
    C. true because when comparing values of different types, values are always converted to numeric values in this case '2' is converted to 2. Because 2 == 2, return true<br/>
    D. false because === is strict equality check and it checks equality without type conversion which means that '2' will not be converted to numeric 2. Because numeric 2 is not equal to string representation of 2, return false<br/>
    E. false because when comparing values of different types, values are always converted to numeric values. In this case true is converted to numeric 1 and 1 is not equal to 2, so return false<br/>
    F. true because we use Boolean(2) to convert 2 to a boolean value of true. Because true is equal to true without the need of type conversion, true === true return true.<br/>
15. == is regular equality check and type conversion may happen during the check<br/>
    === is strict equality check. === check equality without any type conversion.<br/>
17. It will return an array [2,4,6]. modifyArray receives an array and a function doSomething as input. The modifyArray uses the function doSomething to double every element of the array that is passed in and stores the doubled elements to a new array called newArr.
19. 1 4 3 2 will be printed because 1 and 4 are printed once the program is executed and 1 comes before 4. Though 3 is set to be printed immediately, the actual delay is longer than 0. So, 3 is printed after 1 and 4. 2 is set to be printed after 1 second. So, 2 will be printed at the end.


