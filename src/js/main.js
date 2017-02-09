var Person = function (config) {
    this.name = config.name;
    this.age = config.age;
    this.job = config.job;
    };

var nic = new Person({name:'Николя', age:'25', job:'супер работник'});