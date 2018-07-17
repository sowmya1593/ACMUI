import { IMyDate } from 'mydatepicker';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform{

transform(date):any {
if(date === null){ return '';}
else{
 let d = new Date(date * 1000);
       
     
        return d;
        }
}
	
}