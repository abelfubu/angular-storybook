import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'afb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() backgroundColor = '#00bcd4'
  constructor() {}

  ngOnInit(): void {}
}
