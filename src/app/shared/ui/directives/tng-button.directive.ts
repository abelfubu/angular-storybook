import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[tngButton]',
})
export class TngButtonDirective implements OnInit, OnChanges {
  @Input() backgroundColor = '#082098'
  constructor(
    private readonly el: ElementRef<HTMLButtonElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'tng-button')
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor)
  }

  ngOnChanges(change: unknown): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor)
  }
}
