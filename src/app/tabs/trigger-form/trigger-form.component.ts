import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trigger-form',
  templateUrl: './trigger-form.component.html',
  styleUrls: ['./trigger-form.component.scss'],
})
export class TriggerFormComponent implements OnInit {
  @Input() onClose: () => void;
  constructor() { }

  ngOnInit() {}

  dismiss() {
    this.onClose()
  }

}
