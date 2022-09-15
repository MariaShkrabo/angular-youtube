import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppApiService } from './app-api.service';
import { SearchService } from './search/service/search.service';

describe('AppApiService', () => {
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                // register our interceptor with the testing module
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AppApiService,
                    multi: true,
                },
            ],
        });
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should add API KEY as a parameter to request', () => {
        const key = 'AIzaSyBB2wJPK7BbWdkBgEH8X9vEhB8X9KqIyeA';
        const searchService = TestBed.inject(SearchService);
        searchService.getVideoCategories().subscribe((res) => {
            expect(res).toBeTruthy();
        });
        const httpReq = httpMock.expectOne(`${(searchService as any)._CATEGORIES_URL}&key=${key}`);
        expect(httpReq.request.urlWithParams).toEqual(`${(searchService as any)._CATEGORIES_URL}&key=${key}`)
    });
});
