function checkDuplicates() {
    const input = document.getElementById("numbers").value.trim();
    const numbers = input.split(",").map(num => parseInt(num.trim()));
  
    const duplicates = findDuplicates(numbers);
  
    const outputDiv = document.getElementById("output");
    if (duplicates.length > 0) {
      outputDiv.innerHTML = "<strong>Duplicates found:</strong><br>" + duplicates.join(", ");
    } else {
      outputDiv.innerHTML = "<strong>No duplicates found.</strong>";
    }
  }
  
  function findDuplicates(nums) {
    const numMap = {};
    const duplicates = [];
  
    for (const num of nums) {
      if (numMap[num]) {
        duplicates.push(num);
      } else {
        numMap[num] = true;
      }
    }
  
    return duplicates;
  }
  