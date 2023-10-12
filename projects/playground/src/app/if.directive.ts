import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[if]',
})
export class IfDirective {
  @Input('if')
  condition?: Boolean;
  @Input('ifElse')
  template?: TemplateRef<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}

  ngOnChanges() {
    this.containerRef.clear();
    if (this.condition) {
      this.containerRef.createEmbeddedView(this.templateRef);
      return;
    }
    if (this.template) {
      this.containerRef.createEmbeddedView(this.template);
    }
  }
}
