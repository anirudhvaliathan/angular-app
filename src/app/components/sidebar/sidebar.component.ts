import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories: any[] = [];
  errorMsg = ""

  constructor(private dataService: DataService, private router : Router) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe(
      (response) => {
      this.categories = response
    }, 
    (error) => this.errorMsg = error)
  }

  filterCategory(category: string) {
    this.router.navigate(['products', category])
  }

}
