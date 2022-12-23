
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
  console.log("help show three option u can use your option " )
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text  data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.startsWith("hello")){
    hello(text)
  }
  else if(text === 'help\n'){
    help()
  }
  else if( text == 'list\n'){
    list()
  }
  else if (text === 'add\n'){
    console.log("add somthing like add ....")
  }
  else if (text.startsWith("add")) {
    add(text)
  }	  
  else{
    unknownCommand(text);
  }
}

function help(){
  console.log(" -->hello return hello!"+"\n"+" --> exit "+"\n"+" --> quit" )
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

/** 
 * Says hello
 * @param  {string} b
 * @returns {void}
 */
function hello(b) {
  console.log(b.trim()+ "!")
}

/**
 *  list 
 * @returns {void}
 */

let List = ["Task one","Task two","Task three"]
function list (){
  
  let li = List.map((tasks,index) =>`${index+1} - ${tasks}`
  ).join('\n')
  console.log(li);
  }

 function add (){
 console.log("add your task")
 
}
/**
 * add
 * @param {string} b
 * @returns {void}
 */
 function add(b) {
  console.log(`add`)	 
  List.push(b.slice(4, b.length - 1))
  console.log(`added!`)
 }
/**
 * Exits the application
 *
 * @returns {void}
 */

function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
// The following line starts the application
startApp("Mazen elali")
