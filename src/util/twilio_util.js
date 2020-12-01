const axios = require("axios");
const keys = require('../config/keys');

export const sendMessage = (giftGiver, giftReciever, giftGiverNumber) => {

    let message = `Hey ${giftGiver}, pssstt! This is Nick Draper's Secret Santa App letting you know that you will be buying a gift for ${giftReciever}. Happy Holidays!`
    debugger
    return axios({
        "method":"POST",
        "url":`https://twilio-sms.p.rapidapi.com/2010-04-01/Accounts/a/Messages.json`,
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"twilio-sms.p.rapidapi.com",
        "x-rapidapi-key":keys.twilioKey,
        "useQueryString":true
        },"params":{
        "from":"+19093651823",
        "body":message,
        "to":`+1${giftGiverNumber}`
        }, "data": {}
        })
        .then((res)=>{
        console.log(res)
        })
        .catch((error) => console.log( error )
        )
}

