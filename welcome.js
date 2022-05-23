import os from 'os';
function func () {
  return 'Привет, юзер. Вижу ты зашел с ' + os.type()
  
}
console.log(func())