import {db,ref,push} from './firebase.js';
const v=document.getElementById('video');
navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}}).then(s=>v.srcObject=s);
window.capture=async function(type){
const plate=prompt('Vehicle Number (OCR placeholder)');
if(!plate)return;
document.getElementById('plate').value=plate;
await push(ref(db,'vehicles'),{
vehicleNumber:plate,
type,
time:new Date().toISOString()
});
const tr=document.createElement('tr');
tr.innerHTML=`<td>${plate}</td><td>${type==='IN'?new Date().toLocaleString():''}</td><td>${type==='OUT'?new Date().toLocaleString():''}</td>`;
rows.prepend(tr);
alert('Saved');
}
