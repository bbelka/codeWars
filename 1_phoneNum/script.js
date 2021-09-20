function createPhoneNumber(numbers){
  
    let phoneNumArr = numbers;
    const symbols = ['(',')',' ','-'];
    let phoneNumStr = "";
    
    symbols.forEach(symbol => {
      
      switch (symbol){
          
      case '(' : phoneNumArr.splice(0, 0, '(');
          break;
      
      case ')' : phoneNumArr.splice(4, 0, ')');
          break;
      
      case ' ' : phoneNumArr.splice(5, 0, ' ');
          break;
      
      case '-' : phoneNumArr.splice(9, 0, '-');
          break;
      };
      });
    
    phoneNumArr.forEach(char => phoneNumStr += char);
    
    return phoneNumStr;
    };

    console.log([1,2,3,4,5,6,7,8,9,0]); //returns "(123) 456-7890"