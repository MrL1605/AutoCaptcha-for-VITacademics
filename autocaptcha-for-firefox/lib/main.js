// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: ["https://vtop.vit.ac.in/parent/parent_login.asp",
  "https://vtop.vit.ac.in/student/stud_login.asp",
  "https://vtop.vit.ac.in/parent/",
  "https://vtop.vit.ac.in/student/",
  "*://academics2.vit.ac.in/",
  "https://27.251.102.132/parent/parent_login.asp",
  "https://27.251.102.132/student/stud_login.asp",
  "https://27.251.102.132/parent/",
  "https://27.251.102.132/student/"],
  contentScriptFile: self.data.url("captcha.js")
});

pageMod.PageMod({
  include: /http(s)+:\/\/(academics.vit.ac.in)|(27.251.102.132)|(vtop.vit.ac.in)\/(.)*\/attn_report.asp(.)*/,
  contentScriptFile: self.data.url("attendance.js"),
  attachTo: ["existing","top","frame"]
});
