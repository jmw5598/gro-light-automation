import { Pipe, PipeTransform } from '@angular/core';

import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

@Pipe({
  name: 'rpicomponentFilter'
})
export class RPiComponentFilterPipe implements PipeTransform {

  transform(components: Array<RPiComponent>, type: RPiComponentType): any {
    let comps = components.filter((e) => e.type === type);
    console.log('filtering comps');
    console.log(comps);
    console.log('value');
    console.log("type");
    console.log(type);
    console.log("component type:")
    console.log(components[0].type);
    if(type == RPiComponentType.ALL)
      return components;
    else
      return components.filter((e) => e.type === type); //need to add type to rpicompoent
  }

}
