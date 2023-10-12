import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeat]',
})
export class RepeatDirective {
  @Input('repeat')
  page = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private containerRef: ViewContainerRef
  ) {}
  ngOnChanges() {
    this.containerRef.clear();
    for (let i = 0; i < this.page; i++) {
      this.containerRef.createEmbeddedView(this.templateRef, {
        $implicit: i + 1,
      });
    }
  }
}
