// const nodemailer = require("nodemailer");
// const path = require("path");
// var events = require('events');
// var check =1;
// var events = new events.EventEmitter();
// var smtpTransport = nodemailer.createTransport("SMTP",{
//     service: "gmail",
//     auth: {
//         user: "dummyprojecttest14@gmail.com",
//         pass: "gpqseknwkxyqoxes"
//     }
// });

// function emailCreate() {
//   const mailOptions = {
//     from: "dummyprojecttest14@gmail.com",
//     to: "ishu9195singh@gmail.com",
//     subject: "Regarding Student and Project Data",
//     text: "Student and Project Data PDF Attached",
//     html: "<b>Attachment</b>",
//     attachments: [
//       {
//         filename: "ProjectData.pdf", // <= Here: made sure file name match
//         path: path.join(__dirname, "./projectData.pdf"), // <= Here
//         contentType: "application/pdf",
//       },
  
//       {
//         filename: "StudentData.pdf",
//         path: path.join(__dirname, "./studentData.pdf"),
//         contentType: "application/pdf",
//       },
//     ],
//   };
  
//   return mailOptions;
// }

// function send(){
//         smtpTransport.sendMail(emailCreate(),function(err,success){
//         if(err){
//             events.emit('error', err);
//         }
//         if(success){
//             events.emit('success', success);
//         }
//     });
// }
// send();
// events.on("error", function(err){
//     console.log("Mail not send");
//     if(check<10)
//         send();
//     check++;
// });
// events.on("success", function(success){
//     console.log("Mail send");
// });

