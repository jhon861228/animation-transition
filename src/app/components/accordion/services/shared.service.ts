import {Injectable, EventEmitter} from '@angular/core';
// @Injectable makes to available services in root level.
@Injectable({providedIn: 'root'})
export class SharedService {
    chatMessageAdded = new EventEmitter();
}
