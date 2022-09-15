import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppApiService implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const key = `AIzaSyBB2wJPK7BbWdkBgEH8X9vEhB8X9KqIyeA`;
        return next.handle(httpRequest.clone({ setParams: { key } }));
    }
}
