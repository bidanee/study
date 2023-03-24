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

}

export default AnalogClock;