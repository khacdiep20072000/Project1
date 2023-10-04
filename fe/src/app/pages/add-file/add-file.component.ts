import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css'],
})
export class AddFileComponent {
  @ViewChild('fileInput', { static: true }) fileInput!: ElementRef;
  selectedFiles: File[] = [];

  constructor() {}

  chooseFile() {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any) {
    this.selectedFiles = event.target.files;
    console.log(event);
  }
}
