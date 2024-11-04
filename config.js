const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="dylanmt1200@gmail.com"
global.location="Harare,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_25_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDgyLFxuICAgICAgICA2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMyxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLTnMxWVFVN0E0cXY5b0ovOWlPdFovM2RRcjNwYlR5d0lIU01VUkI1U3JrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4MTA1NjI5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkYyODlGNUZDMzM5MUFEMUIyN0M4RUIwRjlEMDE0QUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzUxOTAxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzgxMDU2Mjk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMUE2NTFEMDBCMDU5NkYyODMzQTAyN0Y0MzA2ODIwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3NTE5MDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODEwNTYyOTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFERTZBMUUyNTQwQzJFM0NEMUE2N0ZBQUIyOURENDAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDc1MTkwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4MTA1NjI5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjY1QzBEM0NCQUU5MTUyRDNBMEUzMEY1QjMxMUIxRkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzUxOTAzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNBRkp1cGwtUmVhX18tSmxROVQzQWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDk1Y2E4NjEtMWRmZC00Zjc3LTk3NWItOTY0Y2VhM2QyM2M5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMjU1LFxuICAgICAgMTUwLFxuICAgICAgMjUxLFxuICAgICAgMjE2LFxuICAgICAgMTcxLFxuICAgICAgMTgsXG4gICAgICAxMzcsXG4gICAgICAyMDMsXG4gICAgICAxOTEsXG4gICAgICA3NixcbiAgICAgIDU4LFxuICAgICAgNTIsXG4gICAgICAyMDksXG4gICAgICA5MSxcbiAgICAgIDExMCxcbiAgICAgIDI1MyxcbiAgICAgIDgwLFxuICAgICAgMTc3LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMjQsXG4gICAgICAyNTAsXG4gICAgICAzMyxcbiAgICAgIDk3LFxuICAgICAgNTgsXG4gICAgICA2NyxcbiAgICAgIDExMixcbiAgICAgIDI5LFxuICAgICAgMTksXG4gICAgICA2LFxuICAgICAgMjIyLFxuICAgICAgMTU0LFxuICAgICAgMjUwLFxuICAgICAgNTQsXG4gICAgICAxNTAsXG4gICAgICA4NyxcbiAgICAgIDIwNSxcbiAgICAgIDE2OCxcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHMlIzR1E3N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzgxMDU2Mjk0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTdWhhaWwtTURcIixcbiAgICBcImxpZFwiOiBcIjE4ODU1NTEwNDM0MDIyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1M0dk1NRkVKYmJwTGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDb0hsOFdsdWVsUElZaG1lb0xvWjl1ZGFGbVhzaFp2ZitEelZGZyt4VUJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJvVzNuNzlIQ3p3V2lUcU5KWU1Xc0xuUHM4R3Z1bFNhWkdYUFhDNjhDMCthYnRUNFI0blprNGhuN2RGS0xsSUUySXBVQ3YrbDV1dGpJRjJQUWY3Z0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFEVUFmNnd6bVljRjN2RDlOcHNCWkZRNGE2bUFTWG1TbTJDc25tQU0yYnpjd29yMkNab0hJei95Y1BnQUpYOXZoVGo0dStLNDZWSUkzbFZyTzdNWEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4MTA1NjI5NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzUxODk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUNHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJQ0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIbHY3am5RdTNrMjV4Y1dTVGlvVndWL25aZDVoa0RHd2VLWEZqYXJOU3RzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODM2NzY3NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDc1MTkwMDM0MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
