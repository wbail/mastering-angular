import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ColorsMutable } from "./services/colors-mutable";
import { ColorsToken } from "./tokens/colors-token";
import { ColorsImmutable } from "./services/colors-immutable";
import { Logger, SimpleLogger } from "./services/logger";
import { AppComponent } from "./app.component";

import "../../scss/styles.scss";

// const useImmutable = true;

// const colorsFactory = (logger: Logger) => {

//     if (useImmutable) {
//         return new ColorsImmutable(logger);
//     } else {
//         return new Colors(logger);
//     }
// }

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ 
        { provide: Logger, useValue: SimpleLogger },
        { provide: ColorsToken, useClass: ColorsMutable },
    ],
})
export class AppModule { }
