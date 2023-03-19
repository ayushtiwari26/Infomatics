import React from 'react'
import './PageNotFound.css'

const PageNotFound = () => {
  function randomNum()
  {
      return Math.floor(Math.random() * 9)+1;
  }
      var loop1,loop2,loop3,time=30, i=0, number, selector3 = document.querySelector('.thirdDigit'), selector2 = document.querySelector('.secondDigit'),
          selector1 = document.querySelector('.firstDigit');
      loop3 = setInterval(function()
      {

          if(i > 40)
          {
              clearInterval(loop3);
              selector3.textContent = 4;
          }else
          {
              selector3.textContent = randomNum();
              i++;
          }
      }, time);
      loop2 = setInterval(function()
      {

          if(i > 80)
          {
              clearInterval(loop2);
              selector2.textContent = 0;
          }else
          {
              selector2.textContent = randomNum();
              i++;
          }
      }, time);
      loop1 = setInterval(function()
      {

          if(i > 100)
          {
              clearInterval(loop1);
              selector1.textContent = 4;
          }else
          {
              selector1.textContent = randomNum();
              i++;
          }
      }, time);
  return (
    <>
            <div class="error">
                <div class="container-floud">
                    <div class="col-xs-12 ground-color text-center">
                        <div class="container-error-404">
                            <div class="clip"><div class="shadow"><span class="digit thirdDigit">4</span></div></div>
                            <div class="clip"><div class="shadow"><span class="digit secondDigit">0</span></div></div>
                            <div class="clip"><div class="shadow"><span class="digit firstDigit">4</span></div></div>
                            <div class="msg">OH!<span class="triangle"></span></div>
                        </div>
                        <h2 class="h1">Sorry! Page not found</h2>
                    </div>
                </div>
            </div>
    </>
  )
}

export default PageNotFound