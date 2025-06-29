function myEach(collection, callback) {
    let coll = [];
    if(!Array.isArray(collection)) {
        coll = Object.values(collection);
    } else {
        coll = [...collection];
    }

    for(const element of coll) {
        callback(element);
    }

    return collection;
}
function myMap(collection, callback) {
    let coll = [];
    let newArr = [];
    if(!Array.isArray(collection)) {
        coll = Object.values(collection);
    } else {
        coll = [...collection];
    }

    for(const element of coll) {
        newArr.push(callback(element));
    }

    return newArr;
}
function myReduce(collection, callback, acc) {
    let coll = [];
    if(!Array.isArray(collection)) {
        coll = Object.values(collection);
    } else {
        coll = [...collection];
    }
    if(!acc) {
        acc = coll[0];
        for(const element of coll) {
            if(element === coll[0]){
                continue;
            }
            acc = callback(acc, element, coll)
        }
    }else {
        for(const element of coll) {
            acc = callback(acc, element, coll)
        }
    }

    return acc;
}
function myFind(collection, predicate) {
    let coll = [];
    if(!Array.isArray(collection)) {
        coll = Object.values(collection);
    } else {
        coll = [...collection];
    }
    for(const element of coll) {
        if(predicate(element)) {
            return element;
        }
    }
    return;
}
function myFilter(collection, predicate) {
   let coll = [];
   let filtered = [];
    if(!Array.isArray(collection)) {
        coll = Object.values(collection);
    } else {
        coll = [...collection];
    }
    for(const element of coll) {
        if(predicate(element)) {
            filtered.push(element);
        }
    }
    return filtered;
}
function mySize(collection) {
    let coll = [];
    let filtered = [];
    if(!Array.isArray(collection)) {
        coll = Object.values(collection);
    } else {
        coll = [...collection];
    }
    return coll.length;
}
function myFirst(array, n) {
    let coll = [];
    if(!n) {
        return array[0];
    }else {
        return array.slice(0, n);
    }
}
function myLast(array, n) {
     if(!n) {
        return array.slice(-1)[0];
    }else {
        return array.slice(-n);
    }
}
function myKeys(object) {
    return Object.keys(object);
}
function myValues(object) {
    return Object.values(object);
}