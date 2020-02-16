import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-symptomform',
  templateUrl: './symptomform.component.html',
  styleUrls: ['./symptomform.component.scss'],
})
export class SymptomformComponent implements OnInit {
  @Input() onClose: () => void;
  constructor() { }

  ngOnInit() {}

  dismiss() {
    this.onClose()
  }

}
