import { Component } from '@angular/core';
import { faEye, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.css'],
})
export class ListFileComponent {
  faEye = faEye;
  faX = faX;
}
