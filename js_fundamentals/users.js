users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguages(users){
  var all_users = []
  var wstr = []
  var wint = []
  var fName, lName
  var lang = []
  var inter = []

  for(var key in users){
    var user = users[key]
    for(var el in user){
      if(el == 'fname'){
        fName = user[el]
      }
      if(el == 'lname'){
        lName = user[el]
      }
      if(el == 'languages'){
        lan = user[el]
        for(var i in lan){
          lang.push(' '+lan[i])
        }
      }
      if(el == 'interests'){
        u_in = user[el]
        for(var u in u_in){
          var inu = u_in[u]
          for(var i in inu){
            inter.push(' '+inu[i])
          }
        }
        var user = {
          lang: '',
          int: '',
        }
        inter[inter.length-1] = ' and ' + inter[inter.length-1]
        user['int']=`${fName} is also interested in${inter}.`
        inter = []
        break
      }
    }
    lang[lang.length-1] = ' and ' + lang[lang.length-1]
    user['lang'] = `${fName} ${lName} knows${lang}.`
    all_users.push(user)
    lang = []
  }
  return all_users
}

var users = userLanguages(users)
for(var user in users){
  var one_user = users[user]
  for(var one in one_user){
    console.log(one_user[one])
  }
}
