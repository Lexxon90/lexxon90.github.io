function iqTest(numbers){
    let arr = []
    arr = numbers.split(' ')
    let differ
    if ((arr[0]%2 == 0) && (arr[1]%2 == 0)) {
        console.log('условие 1')
        differ = 0;
    }
    else if ((arr[0]%2 > 0) && (arr[1]%2 > 0)) {
        console.log('условие 2')
        differ = 1;
    }
    else {
        console.log('условие 3')
        differ = arr[2]%2
    }
    if (differ==0) {
      for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 > 0) {
          return (i+1)
        }
      }
    }
    else {
      for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 == 0) {
          return (i+1)
        }
      }
    }
  }
  console.log(iqTest("2 4 7 8 10"))
  console.log(iqTest("1 2 2"))
  console.log(iqTest("1 1 1 1 1 2"))