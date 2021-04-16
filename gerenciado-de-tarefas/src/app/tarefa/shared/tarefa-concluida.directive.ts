import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    if(this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }

  }

}
