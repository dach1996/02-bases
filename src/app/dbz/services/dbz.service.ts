import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
    onDeleteById(id: string) {
        this.characterList = this.characterList.filter(character => character.id !== id);
    }

    addNewCharacter(character: Character) {
        const newCharacter: Character = { id: uuid(), ...character };
        this.characterList.push(newCharacter);
    }

    public characterList: Character[] = [{
        id: uuid(),
        name: 'Goku',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Trunks',
        power: 2000
    },
    {
        id: uuid(),
        name: 'Cell',
        power: 3000
    }]

}