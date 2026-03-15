/**
 * for a given string tell me whether it has even number of characters or not
 */

function evenSizedString(str){
    const size = str.length;
    if(size%2===0){
        console.log('Even size');
    }
    else{
        console.log('Odd size');
    }
    console.log(str,size);
}

evenSizedString("hell"); // "hell", 4
evenSizedString("world"); // "world", 5



function doubleOrTriple()