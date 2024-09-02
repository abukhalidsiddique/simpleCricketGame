 let score=
 {
  Win:0,
  Loss:0,
  Tie:0, 
 }

function call()
{
  let num1=Math.random()*3;
   
  if(num1 >0 && num1 <=1)
  {
     
    console.log('Computer choice is Bat');
    return('Bat');
  }
  else if(num1 >1 && num1<=2)
  {
     
    console.log('Computer choice is Ball');
    return('Ball');
  }
  else
  {
       console.log('Computer choice is Stump');
       return('Stump');
  }
}
function result(mych,cmch)
{
  if (mych === cmch)
    {
      score.Tie++;
      console.log('Tie');
      console.log(score);
      localStorage.setItem('score',JSON.stringify(score));
      document.querySelector('.res').innerHTML=(`You tie
        ${localStorage.getItem('score')}`);
    }
      else if(mych==='Bat')
      {
        if(cmch==='Ball')
        {
          score.Win++;
          console.log('You Win');
          console.log(score);
          localStorage.setItem('score',JSON.stringify(score));
          document.querySelector('.res').innerHTML=(`You win
            ${localStorage.getItem('score')}`);
        }
        else
        {
          score.Loss++;
          console.log('You Lose');
          console.log(score);
          localStorage.setItem('score',JSON.stringify(score));
          document.querySelector('.res').innerHTML=(`You loss
            ${localStorage.getItem('score')}`);
        }
      }
      else if(mych==='Ball')
        {
          if(cmch==='Bat')
          {
            score.Loss++;
            console.log('You Lose');
            console.log(score);
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('.res').innerHTML=(`You Lose
              ${localStorage.getItem('score')}`);
          }  
          else
          {
            score.Win++;
            console.log('You Win');
            console.log(score);          
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('.res').innerHTML=(`You win
              ${localStorage.getItem('score')}`); 
          }
        }
        else if(mych==='Stump')
          {
            if(cmch==='Bat')
            {
              score.Win++;
              console.log('You Win');
              console.log(score);             
              localStorage.setItem('score',JSON.stringify(score));
              document.querySelector('.res').innerHTML=(`You win
                ${localStorage.getItem('score')}`);
            }  
               else
            {
              score.Loss++;
              console.log('You Lose');
              console.log(score);
              localStorage.setItem('score',JSON.stringify(score));
              document.querySelector('.res').innerHTML=(`You Lose
                ${localStorage.getItem('score')}`);         
            }
          }
          else
            {
              console.log('Error');
              alert('Error');
            }
 }