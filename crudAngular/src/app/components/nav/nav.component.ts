import { Component, OnInit } from '@angular/core';
import { faBars, faClipboardList, faEdit, faHome, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public faBars = faBars;
  public faMinus = faMinus;
  public faClipboardList = faClipboardList;
  public faEdit = faEdit;
  public faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
