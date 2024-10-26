import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
    onDelete(index: number) {
        this.characterList.splice(index, 1);
    }

    onNewCharacter(character: Character) {
        this.characterList.push(character);
    }

    public characterList: Character[] = [{
        name: 'Goku',
        power: 1000
    },
    {
        name: 'Trunks',
        power: 2000
    },
    {
        name: 'Cell',
        power: 3000
    }]

}