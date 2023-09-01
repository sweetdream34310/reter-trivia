import { Injectable } from '@angular/core';
import { map, filter, switchMap, exhaustMap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { CategoryActions, ActionWithPayload } from '../actions';
import { Category, RouterStateUrl } from '../../../shared/model';
import { CategoryService } from '../../services';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class CategoryEffects {

    // Load categories based on url
    @Effect()
    // handle location update
    loadRouteCategories$ = this.actions$
        .pipe(ofType(CategoryActions.LOAD_CATEGORIES))
        .pipe(
            switchMap(() => {
                return this.svc.getCategories()
                    .pipe(
                        map((categories: Category[]) => {
                            return this.categoryActions.loadCategoriesSuccess(categories);
                        })
                    );
            })
        );

    @Effect()
    getTopCategories$ = this.actions$
        .pipe(ofType(CategoryActions.LOAD_TOP_CATEGORIES))
        .pipe(
            switchMap(() => this.svc.getTopCategories()),
            map((categories: any[]) => this.categoryActions.loadTopCategoriesSuccess(categories))
        );

    constructor(
        private actions$: Actions,
        private categoryActions: CategoryActions,
        private svc: CategoryService
    ) { }
}
