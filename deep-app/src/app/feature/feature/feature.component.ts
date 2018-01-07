import { Component, OnInit, Inject } from '@angular/core';
import { apiConfigFactory } from '../../core/core.module';
import { PetService } from '../../core/api/index';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor(
    private petService: PetService,
    @Inject('Configuration') Configuration /// 這邊有問題
  ) { }

  ngOnInit() {
    this.petService.getPetById(1).subscribe(v => console.log(v));
  }

}
