const initialPriceInput = document.querySelector(".initial-price");
const currentPriceInput = document.querySelector(".current-price");
const noOfStocksInput = document.querySelector(".no-of-stocks");
const calculateBtn = document.querySelector(".btn");
const resultMsg = document.querySelector("#result");

const handleClick = () => {
  const initialPrice = Number(initialPriceInput.value);
  const currentPrice = Number(currentPriceInput.value);
  const noOfStocks = Number(noOfStocksInput.value);
  const priceDiff = currentPrice - initialPrice;
  const value = priceDiff * noOfStocks;
  const percentageChange = ((priceDiff / initialPrice) * 100).toFixed(2)
  

  console.log(initialPrice, currentPrice, noOfStocks);
  if (initialPrice > 0 && currentPrice >= 0 && noOfStocks > 0) {
   
    if (currentPrice > initialPrice) {

      resultMsg.style.color = "green";
      resultMsg.innerHTML = `Your profit is ${value} and percentage profit is ${percentageChange}%`;
      return;
    }

    if (currentPrice < initialPrice) {

      resultMsg.style.color = "red";
      resultMsg.innerHTML = `Your loss is ${value} and loss profit is ${percentageChange}%`;
      return;
    }

    if (currentPrice === initialPrice) {

      resultMsg.style.color = "blue";
      resultMsg.innerHTML = `No Gain! No Pain!`;
      return;
    }
  }


  resultMsg.style.color = "red";
  resultMsg.innerHTML = "Please enter correct values";
};

calculateBtn.addEventListener("click", handleClick);
