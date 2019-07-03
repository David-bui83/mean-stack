let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

function studentsAndCohort(students){
  for(var student in students){
    console.log(`Name: ${students[student].name}, Cohort: ${students[student].cohort} `)
  }
}

studentsAndCohort(students)

let users = {
  employees: [
      {'first_name':  'Miguel', 'last_name' : 'Jones'},
      {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
      {'first_name' : 'Nora', 'last_name' : 'Lu'},
      {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
  ],
  managers: [
     {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
     {'first_name' : 'Gordon', 'last_name' : 'Poe'}
  ]
};

function employeesAndManagers(users){
  for(var user in users){
    console.log(user.toUpperCase())
    var us = users[user]
    for(var u in us){
      console.log((parseInt(u)+1) + ' - ' + us[u].first_name.toUpperCase() + ', ' + us[u].last_name.toUpperCase() + ' - ' + (us[u].first_name.length + us[u].last_name.length)) 
    }
  }
}

employeesAndManagers(uers)