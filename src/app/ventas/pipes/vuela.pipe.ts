import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'boolean'
})
export class CapaPipe implements PipeTransform {
    transform(value: boolean): string {

        return (value) ? 'Si usa capa' : 'No usa capa'
    }

}