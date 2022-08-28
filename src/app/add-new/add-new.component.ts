import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
name='Max';
allowService:boolean = false;
details='Click here to see the details'
place='present';
detailsAdded=false;
placeArray=['Kerala', 'Goa'];


  constructor() {
    setTimeout(()=>{
      this.allowService=true;
    },2000);
    this.place= Math.random() > 0.5 ? 'present' : 'not_present';
   }

  ngOnInit(): void {
  }
viewDetails(){
  this.details='Displaying the details';
  this.detailsAdded =true;
  this.placeArray.push(this.details);
}
updatePlace(event:any){
console.log(event.target.value);
this.place=event.target.value;
}
getColor(){
  return this.place === 'present' ? '#B1D7B4' : '#FFC090' ;
}
}
