import { Component } from '@angular/core';
import { Character } from '../interface/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    onNewCharacter(character: Character) {
        console.log(character);
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