import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  showList: boolean = true; // Initialize the property

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
      this.showList = !this.showList;
  }

}
