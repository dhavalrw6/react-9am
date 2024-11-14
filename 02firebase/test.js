let obj = {
    "-OBTfhNel2Koo4SnTCl-": {
        "discription": "disc",
        "title": "abc"
    },
    "-OBTg9ZMK8pt1sOJW-os": {
        "discription": "disc",
        "title": "abcd"
    },
    "-OBTgSXFHJ83YCyvDc7J": {
        "discription": "ashdjk",
        "title": "abc"
    },
    "-OBTqzfttpIN3fLiR5nb": {
        "discription": "asdjh",
        "title": "abc"
    },
    "-OBTrA1qZkWRJQW2YwjO": {
        "discription": "leela",
        "title": "dhaval"
    },
    "-OBYqPiY4o6Qw8vAwvIw": {
        "discription": "asdjh",
        "title": "abc"
    },
    "-OBZ1fgwQDoEck1KitEw": {
        "discription": "df",
        "title": "sfd"
    }
}

 let arr = Object.keys(obj).map((key)=>({id : key, ...obj[key]}))

console.log(arr);
