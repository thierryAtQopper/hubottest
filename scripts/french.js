// Added by Thierry
// Commands:
//     frenchy - Answers yes/oui


module.exports = function(robot) {
    robot.hear(/frenchy/i, function(res){
        res.send("Oui bien sur");
    });
}


//module.exports = robot =>
//  robot.hear(/frenchy/i, res => res.send("Oui bien sur"));
  
  

// module.exports = robot =>
//   robot.listen(
//      message => // Match function
//       // Occassionally respond to things that Steve says
//       //console.log(message.user.name)
//       //console.log(message.text)
//       (message.user.name === "thierry") && (Math.random() > 0.5),
//      response => // Standard listener callback
//       // Let Thierry know how happy you are that he exists
//       response.reply(`HI Thierry! YOU'RE MY BEST FRIEND! (but only like ${response.match * 100}% of the time)`)
//   );



//robot.hear(/badger/i, res => res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS"));
  