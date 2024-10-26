import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public ondelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string) {

    if (!id)
      return;
    this.ondelete.emit(id);

  }
  @Input()
  public characterList: Character[] = []
}
