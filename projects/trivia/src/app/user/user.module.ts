import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from 'shared-library/shared/shared.module';
import { UserRoutingModule } from './routing/user-routing.module';
import { effects, reducer } from './store';
import { FormsModule } from '@angular/forms';
import {
  ProfileSettingsComponent,
  MyQuestionsComponent,
  QuestionAddUpdateComponent,
  InviteFriendsComponent,
  InviteFriendsDialogComponent,
  LocationResetDialogComponent,
  GameProfileComponent
} from './components';
// import { ImageCropperModule } from 'ngx-img-cropper';
import { PreviewQuestionDialogComponent } from './components';
import { ImageCropperModule } from 'ngx-img-cropper';
import { NgQuillTexModule } from 'ng-quill-tex';

@NgModule({
  declarations: [
    ProfileSettingsComponent,
    MyQuestionsComponent,
    QuestionAddUpdateComponent,
    InviteFriendsComponent,
    InviteFriendsDialogComponent,
    InviteFriendsDialogComponent,
    LocationResetDialogComponent,
    PreviewQuestionDialogComponent,
    GameProfileComponent
  ],
  imports: [
    // rwa modules
    SharedModule,
    UserRoutingModule,
    //ngrx feature store
    StoreModule.forFeature('user', reducer),

    //ngrx effects
    EffectsModule.forFeature(effects),

    ImageCropperModule,
    FormsModule,
    NgQuillTexModule
  ],
  providers: [],
  exports: [
    ProfileSettingsComponent,
    MyQuestionsComponent,
    QuestionAddUpdateComponent,
    InviteFriendsComponent,
    InviteFriendsDialogComponent,
    LocationResetDialogComponent,
    GameProfileComponent
  ],
  entryComponents: [
    InviteFriendsDialogComponent,
    LocationResetDialogComponent,
    PreviewQuestionDialogComponent
  ]
})
export class UserModule { }
