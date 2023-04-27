const fs = require("fs");

const { Sequelize } = require("sequelize");
const conf = require('../config')
if (fs.existsSync("config.env")) require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "";

module.exports = {
  DATABASE_URL: DATABASE_URL,
  DATABASE:DATABASE_URL === "./lib/database.db"? new Sequelize({dialect: "sqlite",storage: DATABASE_URL,logging: false,}): new Sequelize(DATABASE_URL, {dialect: "postgres",ssl: true,protocol: "postgres",dialectOptions: {native: true,ssl: { require: true, rejectUnauthorized: false },},logging: false,}),
    
  LOGS: process.env.LOGS  === "" ? true :  process.env.LOGS,
  ANTILINK_ACTION: process.env.ANTILINK_ACTION  === "" ? "ban" :  process.env.ANTILINK_ACTION,
  SESSION_ID: process.env.SESSION_ID || process.env.SESSION_ID,
  LANG: process.env.LANG  === "" ? "EN" :  process.env.LANG,
  HANDLERS: process.env.HANDLER === "" ? "^" : process.env.HANDLER,
  RMBG_KEY: process.env.RMBG_KEY  === "" ? false :  process.env.RMBG_KEY,
  BRANCH: process.env.BRANCH  === "" ? "master" : process.env.BRANCH,
  PACKNAME: process.env.PACKNAME  === "" ? "Yasiya" :  process.env.PACKNAME ,
  WELCOME_MSG: process.env.WELCOME_MSG  === "" ? "Hi @user Welcome to @gname" : process.env.WELCOME_MSG,
  GOODBYE_MSG: process.env.GOODBYE_MSG  === "" ? "Hi @user It was Nice Seeing you" : process.env.GOODBYE_MSG,
  AUTHOR: process.env.AUTHOR  === "" ? "Yasiya" :  process.env.AUTHOR,
  SUDO: process.env.SUDO  === "" ? "94741745737" :  process.env.SUDO,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME  === "" ? "^" :  process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY  === "" ? "^" :  process.env.HEROKU_API_KEY,
  OWNER_NAME: process.env.OWNER_NAME  === "" ? "Yasiya" :  process.env.OWNER_NAME,
  BOT_NAME: process.env.BOT_NAME  === "" ? "Yasiya" :  process.env.BOT_NAME,
  WORK_TYPE: process.env.WORK_TYPE  === "" ?  "private" : process.env.WORK_TYPE,
  MODE: process.env.MODE  === "" ? "private" : process.env.MODE,
  ALIVE: process.env.ALIVE  === "" ? "```I am active```" : process.env.ALIVE,
  //DB_AUTH_TOKEN: process.env.DB_AUTH_TOKEN  === "" ? false : process.env.DB_AUTH_TOKEN,
 // MENTION_AUD: process.env.MENTION_AUD  === undefined || "" || [] ? "https://i.imgur.com/2nEwQLy.mp4,https://i.imgur.com/lDZOEHl.mp4,https://i.imgur.com/WxQbgOU.mp4,https://i.imgur.com/BVypaUc.mp4,https://i.imgur.com/L9Jnpt5.mp4,https://i.imgur.com/3Te73pm.mp4,https://i.imgur.com/gkzBe1X.mp4,https://i.imgur.com/aEpNAtl.mp4,https://i.imgur.com/JiuFyXy.mp4,https://i.imgur.com/jEVzyWS.mp4,https://i.imgur.com/1npmJY6.mp4" : process.env.MENTION_AUD,
  // MENTION_IMG: process.env.MENTION_IMG  === undefined || "" ? "https://i.imgur.com/0IaPsiM.jpeg,https://i.imgur.com/MIJv3kT.jpeg" : process.env.MENTION_IMG,
 // MENTION: process.env.settings.MENTION  === [] || undefined ? false : process.env.settings.MENTION,

  FOOTER:  process.env.FOOTER  === "" ?  "Yasiya" : process.env.FOOTER,
  THEME: process.env.THEME  === "" ?  "alfa" : process.env.THEME,
  FONT_STYLE: process.env.FONT_STYLE  === "" ? "1" : process.env.FONT_STYLE,
  LANGUAGE: process.env.LANGUAGE  === "" ? "EN" :  process.env.LANGUAGE, 
  INTERNAL_MENU: process.env.INTERNAL_MENU  === "" ? "active" :  process.env.INTERNAL_MENU,
  STORAGE_JID: process.env.STORAGE_JID  === "" ? "" :  process.env.STORAGE_JID,

  B1:process.env.B1  === "" ? '╭════〘 ' :  process.env.B1,
  B2:process.env.B2  === "" ? ' 〙════⊷❍' :  process.env.B2,
  B3:process.env.B3  === "" ? '┃✧╭─────────────────' :  process.env.B3,
  B4:process.env.B4  === "" ? '┃✧│' :  process.env.B4,
  B5:process.env.B5  === "" ? "┃✧╰─────────────────\n╰══════════════════⊷❍" :  process.env.B5,

  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || "",
  KOYEB_API_KEY:process.env.KOYEB_API_KEY || "",



};
