import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Wg} from '../../../share/model/wg';
import {ActivatedRoute, Router} from '@angular/router';
import {WgService} from '../../../share/service/wg.service';

@Component({
  selector: 'app-wg-crate-zone',
  templateUrl: './wg-create.component.html',
  styleUrls: ['./wg-create.component.css']
})
export class WgCreateComponent implements OnInit {


  createWG: Wg = new Wg();

  constructor(private activateedRoute: ActivatedRoute,
              private router: Router,
              private wgService: WgService) {

  }

  ngOnInit() {
  }

  saveWg(){
    debugger;
    this.wgService.saveWg(this.createWG);
      /*.subscribe(wg => {
        this.newWg.emit(wg);
    });*/
  }
}
