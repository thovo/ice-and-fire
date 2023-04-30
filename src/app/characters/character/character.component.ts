import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@shared/models/character';
import { CharactersService } from '@shared/services/characters.service';
import { Observable, Subject, takeUntil, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit, OnDestroy {
  character$!: Observable<Character>;
  destroy$: Subject<boolean> = new Subject();

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.character$ = this.route.params.pipe(
      takeUntil(this.destroy$),
      map(params => params['id']),
      switchMap(id => this.charactersService.getCharacter(id))
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
