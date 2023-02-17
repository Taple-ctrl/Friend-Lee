document.getElementById("priceCar").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #FF9514 0%, #FF9514 ' + value + '%, #E1E1E1 ' + value + '%, #E1E1E1 100%)'
};

document.getElementById("initialPay").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #FF9514 0%, #FF9514 ' + value + '%, #E1E1E1 ' + value + '%, #E1E1E1 100%)'
};

document.getElementById("leaseTerm").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #FF9514 0%, #FF9514 ' + value + '%, #E1E1E1 ' + value + '%, #E1E1E1 100%)'
};