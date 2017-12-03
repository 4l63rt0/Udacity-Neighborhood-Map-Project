var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img01.jpg');
    this.imgAttribution = ko.observable
}

ko.applyBindings(new ViewModel())
