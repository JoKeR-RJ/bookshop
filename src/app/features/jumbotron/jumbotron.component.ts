import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  imports: [RouterModule],
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.scss'
})
export class JumbotronComponent {

  extendedlogo = '/img/jumbo/0.png';
  logoImg='/img/logo/logo0.png'

}
