import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { YoutubeSearchService } from '../youtube-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(
              private youtube: YoutubeSearchService,
              private el: ElementRef
              ) { 
  }

  ngOnInit() {
  }

}
