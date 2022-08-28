import { Component, OnInit,Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() heading = ''; 
@Input() buttontext = '';
sticky_header=true;
  constructor() { }

  ngOnInit(): void {
  }

  // @HostListener('window:scroll')
  // onWindowScroll() {
  //    if(document.body.scrollTop > 50 ||     
  //     document.documentElement.scrollTop > 50) {
  //       this.sticky_header = false;
  //      console.log('down')
  //    } else {
  //     this.sticky_header = true;
  //     console.log('up')
  //    }
  // }
}
