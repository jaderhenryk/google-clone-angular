import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'g-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  inputSearch: String = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  search() {
    if (!this.inputSearch || this.inputSearch == '') {
      return;
    }
    console.log('You submit the form!!!', this.inputSearch)
    this.router.navigate(['/search'], { queryParams: { q: this.inputSearch }, relativeTo: this.route})
  }

}
