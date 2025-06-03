"use server";
var https = require('follow-redirects').https;
var fs = require('fs');

export default async function sendWhatsappCode(phoneNumber) {
  var options = {
    'method': 'POST',
    'hostname': 'wgmrgq.api.infobip.com',
    'path': '/whatsapp/1/message/template',
    'headers': {
        'Authorization': 'App 7e445c3d666ccb4c1936fbd89d1e7e86-a690219e-21a7-4513-b6c4-d4040ae3325b',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    'maxRedirects': 20
};

var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

var postData = JSON.stringify({
    "messages": [
        {
            "from": "447860099299",
            "to": "233501092218",
            "messageId": "de1fe935-fb8a-4cf4-9f51-a704ccd95e98",
            "content": {
                "templateName": "test_whatsapp_template_en",
                "templateData": {
                    "body": {
                        "placeholders": ["Kelvin"]
                    }
                },
                "language": "en"
            }
        }
    ]
});

req.write(postData);

req.end();
return({success: true, data: "Sent"})
}