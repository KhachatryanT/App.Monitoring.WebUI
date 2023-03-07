import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-node-edit',
  templateUrl: './node-edit.component.html',
  styleUrls: ['./node-edit.component.css'],
  imports: [CommonModule, FormsModule]
})
export class NodeEditComponent {
  public readonly nodeFormBuilder = new FormBuilder();

  // angular form builder with observable

  @Input() public node:Node;
  @Output() public editedNode = new EventEmitter<Node>();
  // emitter save btn clicked


  constructor(private readonly form: FormBuilder) {

  }

  public handleBtnClick(){
    // получить из формы Node;
    const node = {} as Node;
    this.editedNode.emit(node);
  }
  // каждому form Builder присвоить свойства из node в ngOninit
}
