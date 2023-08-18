    const bulb = document.getElementById("bulb"),
        countElements = document.querySelectorAll('[name="count"]'),
        currentHot = document.getElementById("currentHot"),
        prevHot = document.getElementById("prevHot"),
        rateHot = document.getElementById("rateHot"),
        sumHot = document.getElementById("sumHot"),
        currentCold = document.getElementById("currentCold"),
        prevCold = document.getElementById("prevCold"),
        rateCold = document.getElementById("rateCold"),
        sumCold = document.getElementById("sumCold"),
        runoffHot = document.getElementById("runoffHot"),
        runoffCold = document.getElementById("runoffCold"),
        rateRunoff = document.getElementById("rateRunoff"),
        sumRunoff = document.getElementById("sumRunoff"),

        currentLight = document.getElementById("currentLight"),
        prevLight = document.getElementById("prevLight"),
        rateLight = document.getElementById("rateLight"),
        sumLight = document.getElementById("sumLight"),
        currentGas = document.getElementById("currentGas"),
        prevGas = document.getElementById("prevGas"),
        rateGas = document.getElementById("rateGas"),
        sumGas = document.getElementById("sumGas"),
        sum = document.getElementById("sum"),
        btn = document.getElementById("btn");
    let sum1, sum2, sum3, sum4, sum5, sum6;

    // мигающая лампочка
    function turnOn(){
      bulb.src = "images/bulb11.png";
      setTimeout(() => {
          bulb.src = "images/bulb00.png";
      }, 1500);
    }
    setInterval(turnOn, 2500);    

    // для каждого элемента input нужно повесить событие на изменение change, 
    // по которому должны считаться локальные суммы
    countElements.forEach(elem => {
      elem.addEventListener ("change", function() {

        //Горячая вода
        if (((Number(currentHot.value) > 0 && parseInt(prevHot.value) >= 0) && (Number(currentHot.value) > Number(prevHot.value))) || (currentHot.value == "" && prevHot.value == "")){    
        sum1 = ((currentHot.value - prevHot.value) * rateHot.value).toFixed(2);
        sumHot.innerHTML = `Горячая: <span class="result">${sum1}</span>  руб.`;
        } else {
            sum1 = 0;
            sumHot.innerHTML = `Горячая: <span class="result">${sum1.toFixed(2)}</span>  руб.`;
        }

        //холодная вода
        if (((currentCold.value > 0 && parseInt(prevCold.value) >= 0) && (Number(currentCold.value) > Number(prevCold.value))) || (currentCold.value == "" && prevCold.value == "")){
        sum2 = ((currentCold.value - prevCold.value) * rateCold.value).toFixed(2);
        sumCold.innerHTML = `Холодная: <span class="result">${sum2}</span>  руб.`;
        } else {
            sum2 = 0;
            sumCold.innerHTML = `Холодная: <span class="result">${sum2.toFixed(2)}</span>  руб.`;
        }

        //Стоки
        if ((currentHot.value > 0 && parseInt(prevHot.value) >= 0) && (Number(currentHot.value) > Number(prevHot.value))) {
        runoffHot.value = (currentHot.value - prevHot.value).toFixed(3);
        } else {
            runoffHot.value = "";
        } 

        if ((currentCold.value > 0 && parseInt(prevCold.value) >= 0) && (Number(currentCold.value) > Number(prevCold.value))) {
        runoffCold.value = (currentCold.value - prevCold.value).toFixed(3);
        } else {
            runoffCold.value = ""
        }

        sum3 = ((Number(runoffHot.value) + Number(runoffCold.value)) * rateRunoff.value).toFixed(2);
        sumRunoff.innerHTML = `Стоки: <span class="result">${sum3}</span>  руб.`;
        
        //Эл/энергия
        if(((currentLight.value > 0 && parseInt(prevLight.value) >= 0) && (Number(currentLight.value) > Number(prevLight.value))) || (currentLight.value == "" && prevLight.value == "")){
        sum4 = ((currentLight.value - prevLight.value) * rateLight.value).toFixed(2);
        sumLight.innerHTML = `Эл/энергия: <span class="result">${sum4}</span>  руб.`;
        } else {
            sum4 = 0;
            sumLight.innerHTML = `Эл/энергия: <span class="result">${sum4.toFixed(2)}</span>  руб.`;
        }

        //Газ
        if(((currentGas.value > 0 && parseInt(prevGas.value) >= 0) && (Number(currentGas.value) > Number(prevGas.value))) || (currentGas.value == "" && prevGas.value == "")){
        sum5 = ((currentGas.value - prevGas.value) * rateGas.value).toFixed(2);
        sumGas.innerHTML = `Газ: <span class="result">${sum5}</span>  руб.`;
        } else {
            sum5 = 0;
            sumGas.innerHTML = `Газ: <span class="result">${sum5.toFixed(2)}</span>  руб.`;
        };

        //Общая сумма
        sum6 = (Number(sum1) + Number(sum2) + Number(sum3) + Number(sum4) + Number(sum5)).toFixed(2);
        sum.innerHTML = `${sum6} р.`;
      })
    })

    btn.onclick = () => {
      sum.style.display = 'block';

      if (Number(currentHot.value) < 0 || Number(prevHot.value) < 0 || Number(currentCold.value) < 0 || Number(prevCold.value) < 0 || 
      Number(currentLight.value) < 0 || Number(prevLight.value) < 0 || Number(currentGas.value) < 0 || Number(prevGas.value) < 0){
          alert('Показание не может быть отрицательным!');
      }
      else if (Number(currentHot.value) < Number(prevHot.value)){
          alert("Текущее показание горячей воды не может быть меньше предыдущего!");
      }
      else if (Number(currentCold.value) < Number(prevCold.value)){
          alert("Текущее показание холодной воды не может быть меньше предыдущего!");
      }
      else if (Number(currentLight.value) < Number(prevLight.value)){
          alert("Текущее показание эл/энергии не может быть меньше предыдущего!");
      }
      else if (Number(currentGas.value) < Number(prevGas.value)){
          alert("Текущее показание газа не может быть меньше предыдущего!");
      }
    }

