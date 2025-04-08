import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule,RouterModule, FeatureComponent],
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}