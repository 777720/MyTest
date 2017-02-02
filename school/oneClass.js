var teacher = require("./teachers")
var student = require("./students")


function add(teacherName,students){
  teacher.add(teacherName)
  students.forEach(function(item,index){
    student.add(item)
  })
}
exports.add = add
