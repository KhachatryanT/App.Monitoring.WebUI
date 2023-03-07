import {Component, Inject, OnDestroy} from '@angular/core';
import {NodeService} from "../node.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription, takeUntil} from "rxjs";
import {DestroyService} from "../destroy.service";

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent {

  public node$: Observable<Node>;

  constructor(private readonly nodeService: NodeService,
              private readonly activatedRoute: ActivatedRoute,
              @Inject(DestroyService) private readonly ngUnsubscribe$: Observable<void>) {
    activatedRoute.params
      .pipe(takeUntil(ngUnsubscribe$))
      .subscribe(values => {
        const id = values["id"];
        if (id && id.length) {
          this.node$ = this.nodeService.getNode(id)
        } else {
          // редирект на корень router (как-то так)
        }
      });


    //
    //nodeService.getNodes()
  }

  // Кнопка сохранить нажата
  // отправить запрос на обновление

  public updateNode(node: Node) {
    this.nodeService.updateNode(node)
      .subscribe(res => {
        // if OK then ....
      })
  }
}
