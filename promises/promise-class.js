/_ ES5 _/
var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            //var reason = 'mom is not happy';
            reject(reason); // reject
        }

    }
);

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};


// call our promise
var askMom = function () {
    console.log('before asking Mom'); // log before
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        });
    console.log('after asking mom'); // log after
}
askMom();

/*
What is the sequence of expected output? Probably you expect:

1. before asking Mom
2. Hey friend, I have a new black Samsung phone.
3. after asking mom

However, the actual output sequence is:

1. before asking Mom
2. after asking mom
3. Hey friend, I have a new black Samsung phone.
*/