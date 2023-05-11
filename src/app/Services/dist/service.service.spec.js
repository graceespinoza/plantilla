"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var service_service_1 = require("./service.service");
describe('ServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(service_service_1.ServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
