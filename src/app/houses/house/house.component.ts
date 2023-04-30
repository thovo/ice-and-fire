import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, map, switchMap, takeUntil } from 'rxjs';
import { House } from '@models/house';
import { HousesService } from '@services/houses.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseComponent implements OnInit, OnDestroy {

  house$!: Observable<House>;
  destroy$: Subject<boolean> = new Subject();

  constructor(private route: ActivatedRoute, private housesService: HousesService) { }

  ngOnInit(): void {
    this.house$ = this.route.params.pipe(
      takeUntil(this.destroy$),
      map(params => params['id']),
      switchMap(id => this.housesService.getHouse(id))
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
