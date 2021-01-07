const Helpers = () => {
  const moment = require("moment-timezone");
  const helper = {
    // sayHello: () => {
    //   const result = "<li>  10 </li>";
    //   return result;
    // },
    // lookupMy: (array, index) => {
    //   if (Array.isArray(array)) {
    //     // eslint-disable-next-line no-console
    //     console.log("isArray");
    //   } else {
    //     // eslint-disable-next-line no-console
    //     console.log("NOT isArray");
    //   }
    //   // eslint-disable-next-line no-console
    //   console.log("arr[1]=", array[index]);
    //   return array[index];
    // },
    // createStringList: (array) => {
    //   let result = "";
    //   // eslint-disable-next-line no-plusplus
    //   for (let i = 0; i < array.length; i++) {
    //     result += `<li>${array[i]}</li>`;
    //   }
    //   return result;
    // },
    dateView: (date) => {
      const newDate = moment(new Date(date)).locale("ru").format("LL");
      // const newDate = date.toLocaleDateString('ru', {
      //     year: 'numeric',
      //     month: 'long',
      //     day: 'numeric',
      //     timezone: 'UTC'
      // });
      return newDate;
    },
    dateViewBrowser: () => {
      const newDate = moment(new Date()).locale("ru").format("LL");
      return newDate;
    },
    dateNew: () => new Date(),
    // определяем имя выбранного select editday.hbs
    // selected: (defaultname, dayname) => {
    //   // eslint-disable-next-line eqeqeq
    //   if (defaultname == dayname) return true;
    //   return false;
    // },
    // определяем цвет для выбранного select editday.hbs
    // selectColorView: (arrdefaultname, dayname, arrdefaultcolor) => {
    //   let res = 0;
    //   arrdefaultname.forEach((currentValue, index) => {
    //     // eslint-disable-next-line eqeqeq
    //     if (currentValue == dayname) res = index;
    //   });
    //   return arrdefaultcolor[res];
    // },
    arrlength: (array) => array.length - 1,
    // percent: (allCost, resultArrCostsIndex) => {
    //   return (resultArrCostsIndex / allCost) * 100;
    // },
    // striped: index => {
    //     if (index % 2 === 0) {
    //         return "WhiteSmoke";
    //       }
    // }
    isSelected: (value, selectedValue) => selectedValue === value,
  };
  return helper;
};

module.exports = Helpers();
