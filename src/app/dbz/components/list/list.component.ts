import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public ondelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number) {
    this.ondelete.emit(index);
  }
  @Input()
  public characterList: Character[] = []
}
