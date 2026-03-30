import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private secaoAtivaSubject = new BehaviorSubject<number>(1);
  secaoAtiva$ = this.secaoAtivaSubject.asObservable();

  setSecao(valor: number) {
    this.secaoAtivaSubject.next(valor);
  }
}
