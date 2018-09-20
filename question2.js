var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    console.log(num.toString());
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    console.log(n);
    console.log(('000000000' + num));
    console.log(('000000000' + num).substr(-9));
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}


function inEngWords(num) {
    console.log(num.toString());
    if ((num = num.toString()).length > 12) return 'overflow';
    n = ('000000000000' + num).substr(-12).match(/^(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(n);
    console.log(('000000000' + num));
    console.log(('000000000' + num).substr(-12));
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'hundred ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'billion ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'hundred ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'million ' : '';
    str += (n[5] != 0) ? (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'hundred ' : '';
    str += (n[6] != 0) ? (a[Number(n[6])] || b[n[6][0]] + ' ' + a[n[6][1]]) + 'thousand ' : '';
    str += (n[7] != 0) ? (a[Number(n[7])] || b[n[7][0]] + ' ' + a[n[7][1]]) + 'hundred ' : '';
    str += (n[8] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[8])] || b[n[8][0]] + ' ' + a[n[8][1]]) + 'only ' : '';
    return str;
}



let numberr = prompt();
inword = inEngWords(numberr);
console.log(inword);