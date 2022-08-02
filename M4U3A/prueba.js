var moment =require('moment');
moment.locale('es');
console.log('Naci ' + moment('24,03,1989','DD,MM,YYYY').fromNow())