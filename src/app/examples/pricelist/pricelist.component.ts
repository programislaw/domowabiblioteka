import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-service',
    templateUrl: './pricelist.component.html',
    styleUrls: ['./pricelist.component.scss']
})

export class PricelistComponent implements OnInit {

    avarageBookPrice = 50;

    minPrice: number;
    maxPrice: number;
    isDataCorrect = false;
    shelveAntique = false;
    shelveAntiquePrices: number[] = [2000, 5000];
    shelveModern = false;
    shelveModernPrices: number[] = [200, 500];

    armchairAntique = false;
    armchairAntiquePrices: number[] = [1500, 3000];
    armchairModern = false;
    armchairModernPrices: number[] = [400, 1000];

    tableAntique = false;
    tableAntiquePrices: number[] = [300, 1000];
    tableModern = false;
    tableModernPrices: number[] = [100, 500];

    smallLibrary = false;
    smallLibraryPrices: number[] = [300 * this.avarageBookPrice, 600 * this.avarageBookPrice]; //1, 2
    midleLibrary = false;
    midleLibraryPrices: number[] = [600 * this.avarageBookPrice, 900 * this.avarageBookPrice]; //2, 3
    largeLibrary = false;
    largeLibraryPrices: number[] = [900 * this.avarageBookPrice, 1200 * this.avarageBookPrice];//3, 5
   
    calculationInfo = 'Jeśli wybrałeś już wszystkie elementy wyposażenia twojej biblioteki to możesz teraz obliczyć zgróbny koszt realizacji.';

    constructor() { }

    public calculate() {

        this.minPrice = 0;
        this.minPrice += this.addPrices(true, this.shelveAntique, this.shelveAntiquePrices) * this.numberOfBookshelfs(true);
        this.minPrice += this.addPrices(true, this.shelveModern, this.shelveModernPrices) * this.numberOfBookshelfs(true);
        this.minPrice += this.addPrices(true, this.armchairAntique, this.armchairAntiquePrices);
        this.minPrice += this.addPrices(true, this.armchairModern, this.armchairModernPrices);
        this.minPrice += this.addPrices(true, this.tableAntique, this.tableAntiquePrices);
        this.minPrice += this.addPrices(true, this.tableModern, this.tableModernPrices);
        this.minPrice += this.addPrices(true, this.smallLibrary, this.smallLibraryPrices);
        this.minPrice += this.addPrices(true, this.midleLibrary, this.midleLibraryPrices);
        this.minPrice += this.addPrices(true, this.largeLibrary, this.largeLibraryPrices);
        if (this.minPrice > 0) {
            this.minPrice += this.minPrice * 1.3;
        }
        this.maxPrice = 0;
        this.maxPrice += this.addPrices(false, this.shelveAntique, this.shelveAntiquePrices) * this.numberOfBookshelfs(false);
        this.maxPrice += this.addPrices(false, this.shelveModern, this.shelveModernPrices) * this.numberOfBookshelfs(false);
        this.maxPrice += this.addPrices(false, this.armchairAntique, this.armchairAntiquePrices);
        this.maxPrice += this.addPrices(false, this.armchairModern, this.armchairModernPrices);
        this.maxPrice += this.addPrices(false, this.tableAntique, this.tableAntiquePrices);
        this.maxPrice += this.addPrices(false, this.tableModern, this.tableModernPrices);
        this.maxPrice += this.addPrices(false, this.smallLibrary, this.smallLibraryPrices);
        this.maxPrice += this.addPrices(false, this.midleLibrary, this.midleLibraryPrices);
        this.maxPrice += this.addPrices(false, this.largeLibrary, this.largeLibraryPrices);
        if (this.maxPrice > 0) {
            this.maxPrice += this.maxPrice * 1.3;
        }
        if (this.minPrice <= 0 || !(this.smallLibrary || this.midleLibrary || this.largeLibrary)) {
            this.isDataCorrect = false;
            this.calculationInfo = 'Proszę zaznaczyć elementy i wielkość księgozbioru przed dokonaniem obliczenia.';
        } else {
            this.isDataCorrect = true;
            this.calculationInfo = 'Wstępna wycena twojego projektu powinna zawierać się w zakresie: ';
        }
    }

    ngOnInit() {}

    private addPrices(isMin: boolean, element: boolean, priceArray: number[]) {
        let pr = 0;
        if (element) {
            pr = isMin ? priceArray[0] : priceArray[1];
        }
        return pr;
    }

    private numberOfBookshelfs(isMin: boolean) {
        if (this.smallLibrary) {
            return isMin ? 1 : 2;
        } else if (this.midleLibrary) {
            return isMin ? 2 : 3;
        } else if (this.largeLibrary) {
            return isMin ? 3 : 5;
        } else {
            return 0;
        }
    }
}
