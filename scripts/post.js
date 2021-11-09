const fs = require("fs")

function getCurrentDate(n) {
  return (n < 10 ? "0" : "") + n
}

var date = new Date()
var month = getCurrentDate(date.getMonth() + 1)
var day = getCurrentDate(date.getDate())
var year = date.getFullYear()
var formattedDate = year + "-" + month + "-" + day

const blogdir = "./posts"

const random_id = Math.floor(1000 + Math.random() * 9000)
const basename = "tamil-kavithai-" + random_id

const contents = `---
title: ""
description: ""
date: ${formattedDate}
tags:
  - ""
copykavithai: false
---
`

fs.writeFile(`${blogdir}/${basename}.mdx`, contents, () =>
  console.log(`✔ Created ${blogdir}/${basename}.md`)
)