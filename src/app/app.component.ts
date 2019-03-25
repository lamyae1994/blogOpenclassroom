import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title1 = 'My blog';
  posts = [
    {
      titre: 'Mon premier post',
      created_at: new Date(),
      content_post: 'Lorem ipsum dolor sit amet, ut metus curabitur, pellentesque porttito' +
        'r fermentum. In nibh praesent mauris et nulla, ' +
        'est eu mauris posuere facilisis magna, aliquam magna, ut sem vitae eget. Curabitur quam, nullam' +
        ' dictum sed viverra nullam dis dui,' +
        ' odio purus wisi. Elit dui quam in nec tortor, pretium ea ex et eros a.',
      loveItsc: 0
    },
    {
      titre: 'Mon deuxième post',
      created_at: new Date(),
      content_post: ' Nulla magna, arcu vestibulum unde, augue adipiscing scelerisque tincidun' +
        't donec rutrum, vestibulum mattis phasellus,' +
      ' non lacus. Sit nulla wisi at condimentum ut nostra.',
      loveItsc: 0
    },
    {
      titre: 'Encore un post',
        created_at: new Date(),
      content_post: 'In nibh praesent mauris et nulla, est eu mauris posuere facilisis magna, aliquam magna, ut sem vitae eget.' +
    ' Curabitur quam, nullam dictum sed viverra nullam dis dui, odio purus wisi. Elit dui quam in nec tortor, pretium ea ex et eros a.',
      loveItsc: 0
    }
    ];

}
