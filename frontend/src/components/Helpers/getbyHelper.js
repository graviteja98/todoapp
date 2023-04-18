import { API }from "../../api"
export default async function getby (a){
let result
await fetch('http://'+API+'/api/todo/get').then(response => response.json()).then(r=> r).catch(error=>console.log(error))

return result;
}