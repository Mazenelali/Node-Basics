
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
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
  console.log("help show three option u can use your option ")
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
  else if (text.startsWith("hello")) {
    hello(text)
  }
  else if (text === 'help\n') {
    help()
  }
  else if (text == 'list\n') {
    list()
  }
  else if (text === 'add\n') {
    console.log("add somthing like add ....")
  }
  else if (text.startsWith("add")) {
    add(text)
  }
  else if (text === `remove\n`) {
    List.remove()
  }
  else if (text.startsWith('remove')){
    Remove(text.slice(6,text.length-1))
  }
  else if (text.startsWith("edit\n")){
  editOut(text)
  }
  else if (text.startsWith("check")) {
    check(text);

  }else if (text.startsWith("uncheck")) {
    uncheck(text);
  }	  
  else {
    unknownCommand(text);
  }
}

function help() {
  console.log(" -->hello return hello!" + "\n" + " --> exit " + "\n" + " --> quit" + "\n"+ "--> list tasks" +'\n'+"-->add tasks" +'\n'+"-->remove tasks")
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}
/** 
 * Says hello
 * @param  {string} b
 * @returns {void}
 */
function hello(b) {
  console.log(b.trim() + "!")
}

/**
 *  list 
 * @returns {void}
 */

let List = ["[✓] Task one", "[ ] Task two", "[✓] Task three"]
function list() {

  let li = List.map((tasks, index) => `${index + 1} - ${tasks}`
  ).join('\n')
  console.log(li);
}
/**
 * add
 * @param {string} c
 * @returns {void}
 */
function add(b) {
  List.push(b.slice(4, b.length - 1))
  console.log(`added!`)
}
/**
* remove
* @param {string} r
* @returns {void}
*/
function remove(r) {
  List.pop(r.lenght)
  console.log("removed")
}
function Remove(nb){
  let index=parseInt(nb);
  if ( index>=1 && index <=List.length){
    List.splice(index-1,1);
  }
  else (
    console.log("eror")
  )

}
/**
 * edit
 * 
 */
function editOut (){
  if (List = List){
    console.log("error")
  }
}
function check(arg) {
  const myArray = arg.split(" ");
  if (arg == "check") {
    console.log('error commend not found')
  }
  else {
    let pos = myArray[1] - 1;
    let oldItem = (List[myArray[1] - 1]).substring(3);
    List.splice(pos, 1, '[✓]' + oldItem);

  }}
  /**
   * 
   * @returns {void}
   *  
   */

  function uncheck(arg) {
    const myArray = arg.split(" ");
    if (arg == "uncheck") {
      console.log('error commend not found')
    }
    else {
      let pos = myArray[1] - 1;
      let oldItem = (list[myArray[1] - 1]).substring(3);
      List.splice(pos, 1, '[ ]' + oldItem);
    }
  }
/**
 * Exits the application
 *
 * @returns {void}
 */

function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}
// The following line starts the application
startApp("Mazen elali")
