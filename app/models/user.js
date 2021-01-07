// load the things we need
const mongoose = require("mongoose");
// var bcrypt   = require('bcrypt-nodejs');
// bcrypt
// var bcrypt   = require('bcrypt');

// const subCategoriesName  = mongoose.Schema({
//     name: {
//         type: String,
//         minlength:[1,"Вы не ввели имя категории"],
//         maxlength:[40,"Слишком длинное имя категории"],
//         unique: true,
//     }
//  });

// define the schema for our user model
const userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String,
    resetToken: String,
    resetTokenExp: Date,
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
  calc: {
    gender: String,
    date: { type: Date, default: Date.now },
    costs: {
      categories: {
        // name: [subCategoriesName],
        // name: {
        // type: [String],
        // minlength:[1,"Вы не ввели имя категории"],
        // maxlength:[40,"Слишком длинное имя категории"],
        // unique: true,
        // default: ["Жилье","Коммунальны услуги","Продукты","Проезд","Интернет",
        // "Сотовая связь","Одежда","Медикаменты","Хозяйственные расходы","Покупка техники",
        // "Развлечения и отдых","Подарки к дню рождения","Прочее"]
        // },
        name: [
          {
            type: String,
            minlength: [1, "Вы не ввели имя категории"],
            maxlength: [40, "Слишком длинное имя категории"],
            unique: true,
            // default: ["Жилье","Коммунальны услуги","Продукты","Проезд","Интернет",
            // "Сотовая связь","Одежда","Медикаменты","Хозяйственные расходы","Покупка техники",
            // "Развлечения и отдых","Подарки к дню рождения","Прочее"]
          },
        ],
        color: {
          type: [String],
          default: [
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
            "green",
          ],
        },
        choiceColor: {
          type: [String],
          // maxlength: [9, "Color too long"],
          // default:["red","pink","purple","indigo","blue","cyan","teal","green",
          // "lime","yellow","orange","brown","grey","black","#FF1493"]
          // цвет вида #FF1493 вызывает ошибку, буду использовать словесную форму, она же удобнее для пользователя
          default: [
            "aqua",
            "teal",
            "blue",
            "navy",
            "lime",
            "green",
            "fuchsia",
            "purple",
            "red",
            "orange",
            "gray",
            "silver",
            "black",
            "hotpink",
            "lightgreen",
          ],
        },
      },
      days: [
        {
          date: Date, // здесь не string
          NameCategories: [
            {
              type: String,
              required: true,
            },
          ],
          colorCategories: [
            {
              type: String,
              required: true,
            },
          ],
          costs: [
            {
              type: Number,
              required: true,
            },
          ],
          allCost: {
            type: Number,
            required: true,
          },
          // coments:{
          //     type: [String],
          //     maxlength:[100,"Слишком длинный комментарий"],
          //     required: true
          // }
          coments: [{ type: String, maxlength: [300, "Comment too long"] }],
        },
      ],
    },
  },
});

// generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
// userSchema.methods.generateHash =  function(password) {
//     return  bcrypt.hash(password, bcrypt.genSalt(8), null);
// };

// checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     // console.log(this.local.password);
//     return bcrypt.compareSync(password, this.local.password);
// };

// userSchema.methods.validPassword =   function(password) {
//     return  bcrypt.compare(password, this.local.password);
// };

// create the model for users and expose it to our app

// eslint-disable-next-line func-names
userSchema.pre("save", function (next) {
  //  this.__v === undefined значение при создании документа
  // eslint-disable-next-line no-underscore-dangle
  if (this.calc.costs.categories.name.length === 0 && this.__v === undefined) {
    const nameDefault = [
      "Жилье",
      "Коммунальны услуги",
      "Продукты",
      "Проезд",
      "Интернет",
      "Сотовая связь",
      "Одежда",
      "Медикаменты",
      "Хозяйственные расходы",
      "Покупка техники",
      "Развлечения и отдых",
      "Подарки к дню рождения",
      "Дивиденты",
      "Заработная плата",
      "Прочее",
    ];
    nameDefault.forEach((item) => {
      this.calc.costs.categories.name.push(item);
    });
  }
  next();
});
module.exports = mongoose.model("User", userSchema);
