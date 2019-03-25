import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() titrePost: string;
  postDate = new Date();
  contenu = 'contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu contenu\n' +
    '        contenu contenu contenu contenu contenu contenu contenu contenu contenu\n' +
    '        contenu contenu contenu contenu contenu contenu contenu contenu contenu';
  loveIts = 0 ;

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
