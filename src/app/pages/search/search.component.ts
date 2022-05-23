import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleResponseModel } from 'src/app/model/google-response.model';
import { GoogleSearchService } from 'src/app/service/google-search.service';

@Component({
  selector: 'g-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private googleSearchService: GoogleSearchService
  ) { }
  searchTerm: string = '';
  googleResponse: GoogleResponseModel | undefined;

  ngOnInit(): void {
    const searchedTerm = this.route.snapshot.queryParams['q'];
    if (searchedTerm) {
      this.searchTerm = searchedTerm;
      this.googleSearchService.callGoogleSearch(searchedTerm)
        .subscribe(response => this.googleResponse = response);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
