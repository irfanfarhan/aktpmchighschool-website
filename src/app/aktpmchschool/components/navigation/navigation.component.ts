import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuMetadata } from './../../model/menu-metadata.model';
import { ModalComponent } from './../../../lib/modal/modal.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  menuMetadata: any;
  @ViewChild('loginModal') loginModal: ModalComponent;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.menuMetadata = MenuMetadata;
  }
}
