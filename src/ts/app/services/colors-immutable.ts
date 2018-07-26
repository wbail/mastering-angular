import { Injectable } from "@angular/core";
import { Logger } from "./logger";
import { Colors } from "../models/colors";

@Injectable()
export class ColorsImmutable implements Colors {

    private colorList: string[] = [];

    constructor(private logger: Logger) {

    }

    public getAll() {
        this.logger.log('retrieved color list');
        return this.colorList;
    }

    public addColor(color: string) {
        this.logger.log('added color to list immutably: ' + color);
        this.colorList = this.colorList.concat(color);
    }
}