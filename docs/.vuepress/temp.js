function toCamel(originName) {
    return originName.split('_').map((item) => {
        return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    }).join('');
}


const strTest = 'this_is_a_function_0';

console.log(toCamel(strTest));
