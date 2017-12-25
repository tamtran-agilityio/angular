import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'uploader-image',
  templateUrl: './uploader-image.component.html',
  styleUrls: ['./uploader-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploaderImageComponent implements OnInit {
  @Input() imageSrc: string;
  @Output() imageSelecter: EventEmitter<any> = new EventEmitter<any>();
  imageInfor: any = null;
  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  changeImage(event) {
    if (event) {
      const file = event.dataTransfer ? _.firsr(event.dataTransfer.files) : _.first(event.target.files);
      const pattern = /image-*/;
      const reader = new FileReader();
      reader.onload = this.readerLoaded.bind(this);

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  readerLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    this.imageSelecter.emit(this.imageSrc);
  }

}
