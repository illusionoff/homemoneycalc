
//01.10.2020
// incoming.js
const arrayGetTime = [];
			let getTime;
			days.forEach(function(day, index) {
				getTime = day.date.getTime();
				console.log(getTime);
				arrayGetTime[index] = getTime;
			});
			console.log("arrayGetTime=", arrayGetTime);
			let newDate = new Date();
			const getTimezoneOffset = newDate.getTimezoneOffset()*60*1000
			// console.log("timestampserver.getTimezoneOffset()", timestampserver.getTimezoneOffset());
			// let timestampserverGetTime = timestampserver.getTime();
			newDate.setHours(0, 0, 0, 0);
			// console.log("timestampserver=", timestampserver);
			let timestampserverGetTime = newDate.getTime() - getTimezoneOffset;
			console.log("timestampserverGetTime=", timestampserverGetTime);

					const nearestBelow = (input, lookup) => lookup.reduce((prev, curr) => input >= curr ? curr : prev);
					let myArray = [11,12,13,14,15]; // инициализируем переменную, содержащую массив чисел
					let myCallback = ( total, currentValue, currentIndex, arr ) => { // инициализируем переменную, содержащую стрелочную функцию, принимающую четыре параметра
						console.log( total, currentValue, currentIndex, arr ); // выводим в консоль значение параметров функции
						return total + currentValue; // возвращаем значение, полученное от суммы первого параметра со вторым
					}
					// let result = myArray.reduce( myCallback ); // вызываем метод только с callback функцией
					let result = myArray.reduce( (total, currentValue, currentIndex, arr ) => { // инициализируем переменную, содержащую стрелочную функцию, принимающую четыре параметра
						console.log( total, currentValue, currentIndex, arr ); // выводим в консоль значение параметров функции
						return total + currentValue; }); // вызываем метод только с callback функцией
					console.log( result );

					const currArray1 = [0,22,56,74,89,100,17];
					let clonArray1 = currArray1.slice().sort();
					const goal = 74;//72;

					// nearestBelow(goal, counts); // result is 56.
					let reduceFind = nearestBelow(goal, clonArray1);
					let number1 = currArray1.indexOf(reduceFind);
				console.log("number1=", number1);

				console.log("nearestBelow(timestampserverGetTime, arrayGetTime)", nearestBelow(timestampserverGetTime, arrayGetTime));

				// let currArray = [0,22,56,74,89,100,17];
				let currArray = [0,22,56,74,89,100,17];
				let clonArray = currArray.slice().sort();
				// let arr = [0,22,56,74,89,100,17].sort();
				let val = 74;
				// let number = arr.reverse().find(e => e <= val);
				let number = currArray.indexOf(clonArray.reverse().find(e => e <= val)); // рабочий вариант
				// let number = arr.reverse().indexOf(e => e <= val);
                console.log("number=", number);
// incoming.js

console.log(" это: /incoming");
			  // для вывода информации по одному  последнему дню дню 
			var dayIndex = days.length-1;
			const currentDate = moment(new Date()).format("YYYY-MM-DD");
			const momentDateServer = moment(new Date());
			const momentDateClient = moment(new Date(req.user.calc.costs.days[dayIndex].date));
			console.log("currentDate=", currentDate);
			console.log("momentDateServer=", momentDateServer);
            console.log("momentDateClient=", momentDateClient);
            
            
const arrayGetTime = [];
			let getTime;
			days.forEach(function(day, index) {
				getTime = day.date.getTime();
				console.log(getTime);
				arrayGetTime[index] = getTime;
			});
			console.log("arrayGetTime=", arrayGetTime);
			let arrayGetTimeClone = arrayGetTime.slice().sort();
			let newDate = new Date();
			const getTimezoneOffset = newDate.getTimezoneOffset()*60*1000
			// console.log("timestampserver.getTimezoneOffset()", timestampserver.getTimezoneOffset());
			// let timestampserverGetTime = timestampserver.getTime();
			newDate.setHours(0, 0, 0, 0);
			// console.log("timestampserver=", timestampserver);
			let timestampserverGetTime = newDate.getTime() - getTimezoneOffset;
			let number1 = arrayGetTime.indexOf(arrayGetTimeClone.reverse().find(e => e <= timestampserverGetTime)); // рабочий вариант нахождения индекса ближайшего меньшего либо равного значения

			console.log("number1=", number1);

				let currArray = [0,22,56,74,89,100,17];
				let clonArray = currArray.slice().sort();
				let val = 74;
				// let number = arr.reverse().find(e => e <= val);
				let number = currArray.indexOf(clonArray.reverse().find(e => e <= val)); // рабочий вариант нахождения индекса ближайшего меньшего либо равного значения
				// let number = arr.reverse().indexOf(e => e <= val);
                console.log("number=", number);
// 

module.exports = function(app, moment, isLoggedIn) {

	app.get('/montview/:date', isLoggedIn,  function(req, res) {
		try {
			const day =  req.user.calc.costs.days[3].date;
			console.log("day=", day);
			const dayNewDate =  new Date(day);
			console.log("dayNewDate=", dayNewDate);
			console.log("day=", day);
			// узнаем текущий день
			const date =  req.params.date;
			console.log("req.params.date=", date);
			const newDate = new Date(date);
			console.log("newDate=", newDate);
			const month = newDate.getMonth();
			const year = newDate.getFullYear();
			console.log("month=", month);
			console.log("year=", year);
			// первый день месяца
			const firstDayMonth = new Date(year, month, 1);
			console.log("firstDayMonth=", firstDayMonth);
			// Узнаем TimeZone 
			// Вот сдесь интересно, если ли зависимость от TimeZone сервера, если объект даты передан с браузера !
			const getTimezoneOffset = 0 - newDate.getTimezoneOffset()/60; // узнаем часы
			console.log("getTimezoneOffset=", getTimezoneOffset);
	
			const firstDayMonthTimezone = new Date(year, month, 1 , getTimezoneOffset );
			console.log("firstDayMonthTimezone=", firstDayMonthTimezone);
	
			console.log(" это: /montview/:date");
			const currentDate = moment(new Date(date)).format("YYYY-MM-DD");
			console.log("currentDate=", currentDate);
			const days = req.user.calc.costs.days;
			// определяем последний день месяца
			function getLastDayOfMonth(year, month) {
				let date = new Date(year, month + 1, 0);
				return date.getDate();
			  }
			//   console.log("getLastDayOfMonth(2012, 0)=", getLastDayOfMonth(2012, 0) ); // 31
			//   console.log("getLastDayOfMonth(2012, 1)=", getLastDayOfMonth(2012, 1) ); // 29
			//   console.log("getLastDayOfMonth(2020, 9)=", getLastDayOfMonth(2020, 9) ); // 31
	
			const lastDayMonth = new Date(year, month, getLastDayOfMonth(year, month), getTimezoneOffset );
			console.log("lastDayMonth=", lastDayMonth);
	
			var newArray = days.filter(function (el) {
				console.log("new Date(el.date)=", new Date(el.date));
				console.log("firstDayMonthTimezone=", firstDayMonthTimezone);
				console.log("lastDayMonth=", lastDayMonth);
	
				return new Date(el.date) <= lastDayMonth &&
				new Date(el.date) >= firstDayMonthTimezone;
			  });
			console.log("newArray=", newArray);
			return
			// Узнаем первый день текущего месяца
	
			// res.render('montview', {
			//     // day: day.toObject(),
			//     // isIncoming: true,
			//     // enableListDate,
			//     // datepicker_options
			//     // user : user.toObject()
			// });
		  } catch (e) {
			console.log(e)
		  }
	  });
	}

	//02.10.2020
	module.exports = function(app, moment, isLoggedIn) {

		app.get('/montview/:date', isLoggedIn,  function(req, res) {
			try {
				// узнаем текущий день
				const date =  req.params.date;
				const newDate = new Date(date);
				const month = newDate.getMonth();
				const year = newDate.getFullYear();
				// Узнаем TimeZone 
				// Вот сдесь интересно, если ли зависимость от TimeZone сервера, если объект даты передан с браузера !
				const getTimezoneOffset = 0 - newDate.getTimezoneOffset()/60; // узнаем часы
				console.log("getTimezoneOffset=", getTimezoneOffset);
				// первый день месяца и учитываем TimeZone
				const firstDayMonthTimezone = new Date(year, month, 1 , getTimezoneOffset );
				console.log(" это: /montview/:date");
				const currentDate = moment(new Date(date)).format("YYYY-MM-DD");
				console.log("currentDate=", currentDate);
				const days = req.user.calc.costs.days;
				// определяем последний день месяца
				function getLastDayOfMonth(year, month) {
					let date = new Date(year, month + 1, 0);
					return date.getDate();
				  }
				//   console.log("getLastDayOfMonth(2020, 9)=", getLastDayOfMonth(2020, 9) ); // 31
		
				const lastDayMonth = new Date(year, month, getLastDayOfMonth(year, month), getTimezoneOffset );
				// массив имеющихся дней текущего месяца
				let daysMonth = days.filter(function (el) {
					return new Date(el.date) <= lastDayMonth &&
					new Date(el.date) >= firstDayMonthTimezone;
				  });
				// console.log("newArray=", newArray);
				  const array = [{q: 1},{w: 2},{e: 3},{r: 4},{t: 5}];
		
				  // daysMonth = daysMonth[0];
				  // console.log("daysMonth[0]=", daysMonth);
		
				  // let arrforConcatName = [];
				  // daysMonth.forEach(function(day, index) {
				  //   if (index>0) {arrforConcatName[index-1] = day.NameCategories}
				  // })
				  // const resultConcatName = daysMonth[0].NameCategories.concat(...arrforConcatName);
				  // console.log("resultConcatName=", resultConcatName);
		
				  function concatArray(arrayOblectDays, arrayName){
					// this.arrayOblectDays = arrayOblectDays;
					// this.arrayName = arrayName;
					let arrforConcatName = [];
					arrayOblectDays.forEach(function(day, index) {
					  if (index>0) {arrforConcatName[index-1] = day[arrayName]}
					})
				   return arrayOblectDays[0][arrayName].concat(...arrforConcatName);
				  }
				  let daysMonthName = concatArray(daysMonth,'NameCategories');
				  let daysMonthColor = concatArray(daysMonth,'colorCategories');
				  let daysMonthCosts = concatArray(daysMonth,'costs')
				  console.log("daysMonthName=", daysMonthName);
				  console.log("daysMonthColor=", daysMonthColor);
				  console.log("daysMonthCosts=", daysMonthCosts);
		
				  let arrName = [];
				  let arrNameDubleAll = [];
				  let arrCosts = [];
				  daysMonthName.forEach( function(name, index) {
		
					// arrNameDubleAll.push(indexOfAll(daysMonthName, name));
					arrNameDubleAll.push(daysMonthName.indexOf(name));
		
					  // if (name == daysMonthName[index + 1]) {
						
					  // } else {
					  //   arrName.push(name)
					  // }
				  });
				  console.log("arrNameDubleAll=", arrNameDubleAll);
				  // arrNameDubleAll = arrNameDubleAll.flat();
				  // console.log("arrNameDubleAll.flat()=", arrNameDubleAll);
				  // Удаляем дубликаты
				  arrNameDubleAll = [...new Set(arrNameDubleAll)];
				  console.log("arrNameDubleAll[...new Set=", arrNameDubleAll);
				  // Создаем новые результирующие массивы
				  function resultArr(arrDubleAll, arrayCurrent) {
					let resultArrName = [];
					arrDubleAll.forEach( function(elem){
					  resultArrName.push(arrayCurrent[elem]);
					});
					return resultArrName
				  }
		
				  // let resultArrName = [];
				  // arrNameDubleAll.forEach( function(elem){
				  //   resultArrName.push(daysMonthName[elem]);
				  // })
				  let resultArrName = resultArr(arrNameDubleAll, daysMonthName);
				  let resultArrColor = resultArr(arrNameDubleAll, daysMonthColor);
				  
		
				  console.log("resultArrName=", resultArrName);
				  console.log("resultArrColor=", resultArrColor);
		
						   var array1 = ['a', 'b', 'a', 'c', 'a', 'd'];
						   // Поск индексов дубликатов по заданному значениюдубликата
						  function indexOfAll(array, duble) {
							// this.array1 = array1;
							let indices = [];
							// let element = 'a';
							let idx = array.indexOf(duble);
							while (idx != -1) {
							  indices.push(idx);
							  idx = array.indexOf(duble, idx + 1);
							}
							return indices
						  }
				let indexOfAllarray = indexOfAll(array1,'t');
		
							console.log("indexOfAllarray=",indexOfAllarray);
							console.log("indexOfAll(daysMonthName,'Жилье')=", indexOfAll(daysMonthName,'Жилье'));
		
				
							// Нахождение суммарной цены одинаковых категорий
							function reduceAllCosts(daysMonthName, daysMonthCosts) {
							  let arrCostsSum = [];
							  daysMonthName.forEach( function(name, index){
								let arrCosts = indexOfAll(daysMonthName, name);
								let costSum = 0;
								arrCosts.forEach(function(elem, index){
								  costSum += daysMonthCosts[elem];
								})
								arrCostsSum.push(costSum);
							  })
							  return arrCostsSum
							}
							let resultreduceAllCosts = reduceAllCosts(daysMonthName, daysMonthCosts);
							let resultArrCosts = resultArr(arrNameDubleAll, resultreduceAllCosts);
							console.log("resultreduceAllCosts=", resultreduceAllCosts);
							console.log("resultArrCosts=", resultArrCosts);
							// Удаляем дубли из массивов
							daysMonthName = [...new Set(daysMonthName)];
							// daysMonthColor = [...new Set(daysMonthColor)];
							// daysMonthCosts = [...new Set(daysMonthCosts)];
		
							console.log("daysMonthName=", daysMonthName);
							// console.log("daysMonthColor=", daysMonthColor);
							// console.log("daysMonthCosts=", daysMonthCosts);
							// daysMonthColor
		
		
							  
							// [0, 2, 4]
				  // let arrNoDubleName = [];
				  // let count = 0;
				  // daysMonthName.forEach(function(name, index) {
				  //   if ()
				  //   arrNoDubleName[count] = 
				  // })
		
		
		
		
				res.render('monthview', {
				  // daysMonth: daysMonth, //daysMonth.toObject()//.lean()
				  // days: days,//.toObject(),
				  // user: req.user.toObject(),
				  array: array,//JSON.stringify(array),
				  daysMonth: daysMonth.toObject()
				});
		
				// res.render('montview', {
				//     // day: day.toObject(),
				//     // isIncoming: true,
				//     // enableListDate,
				//     // datepicker_options
				//     // user : user.toObject()
				// });
			  } catch (e) {
				console.log(e)
			  }
		  });
		}
// 06.10.2020 settings.js
          // меняет два элемента массива in-place
          // function swap(arr, a, b) {
          //   arr[a] = arr.splice(b, 1, arr[a])[0];
          // }
          // Одинаковый результат
          function swap2(arr, a, b) {
            [arr[a], arr[b]] = [arr[b], arr[a]];
          }
          // let name = req.user.calc.costs.categories.name;
          // let color = req.user.calc.costs.categories.color;
          // const Twelve = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ,11 ,12];
          // swap2( Twelve, 2, 5); // индексы считаются от 0
          // swap2(req.user.calc.costs.categories.name, current, newid);
					// swap2(color, current, newid);
// 16.10.2020 yearview 
// Встраивание элемента на ходу
// const table = document.getElementById('table');
  console.log('table=', table);
  const strMonth = "{{daysAllMonthYYYYDyble}}";
  // создаем маасив строк из входной строки
  let Month = strMonth.split(",");
  {{!-- let option_value_html ='';
  Month.forEach( elem => option_value_html += '<option value=\"' + elem + '\" />');
  let htmlcode = `<div class="center-align" ><h6> Выбрать другой год: </h6>
  <input type='month' id='monthSelect' name='start'  list = 'monthList'> 
  <datalist id='monthList'> ${option_value_html}
  </datalist> 
  </div>
   `; --}}
   //<label for='monthSelect'>Выбрать другой месяц:</label>
	{{!-- table.insertAdjacentHTML('afterEnd', htmlcode); --}}
	// вывод времени даты на js в шаблоне - html
	<script>
	const currentDate3 = new Date();
	document.write(`<h6>currentDate3: ${currentDate3}</h6>`);
	const viewDate = currentDate3.toLocaleString('ru', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	document.write(`<h6>Сегодня: ${viewDate}</h6>`);
</script>
//создание и встраивание элемента html на лету
//05_11_2020
{{!-- let div = document.createElement('div');
div.className = "calss_alert";
div.id = "id_alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
document.body.append(div.className); --}}

// dayscreate.js
            // let now_utc_perom =  Date.UTC(date_obj.getUTCFullYear(), date_obj.getUTCMonth(), date_obj.getUTCDate(),
            // date_obj.getUTCHours(), date_obj.getUTCMinutes(), date_obj.getUTCSeconds());