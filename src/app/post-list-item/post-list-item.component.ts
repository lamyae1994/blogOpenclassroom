import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() titrePost;
  @Input() loveIts;
  @Input() contenu;
  @Input() postDate;

  doLoveIt() {
    return this.loveIts++;
  }

  dontLoveIt() {
    return this.loveIts--;
  }
  constructor() { }

  ngOnInit() {
  }

}
