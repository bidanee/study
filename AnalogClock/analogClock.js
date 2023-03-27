import { appendChildrenList, Dom } from "../utils/dom.js"

const AnalogClock = ($container) => {
  const $handHour = Dom('div',{
    className: "hand hour",
  });
  const $handMinute = Dom('div',{
    className: "hand minute",
  });
  const $handSecond = Dom('div',{
    className: "hand second",
  });
  appendChildrenList($container,[$handHour,$handMinute,$handSecond]);
  
  let time = null;
  for (let i = 1; i <= 12 ; i++) {
    time = Dom('div', {
      className: `time time${i}`,
      innerText: '|'
    })
    $container.append(time)
  }
  
  const setTime = () => {
    const date = new Date();
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    if(hours > 12) {hours = hours - 12}
    $handHour.style.setProperty('--deg',hours * 30 + minutes * (30 / 60) + seconds * (0.5 / 60));
    $handMinute.style.setProperty('--deg', minutes * 6 + seconds * (6 /60));
    $handSecond.style.setProperty('--deg',seconds * 6)
  }
  
  setTime()
  setInterval(() => setTime(),1000)

}

export default AnalogClock;