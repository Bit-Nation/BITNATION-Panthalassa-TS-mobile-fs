import FileSystemInterface from 'BITNATION-Panthalassa-TS-fs-interface/FileSystemInterface'
import {writeFile, readFile, exists, DocumentDirectoryPath} from 'react-native-fs'
import Path = require('path');

export class MobileFs implements FileSystemInterface {

    constructor(private path: typeof Path) {};

    async writeFile(fileName:string, content:string) : Promise<{}> {

        fileName = this.path.normalize(DocumentDirectoryPath + '/' + fileName);

        return new Promise((resolve, reject) => {

            writeFile(fileName, content)
                .then(res => resolve({}))
                .catch(err => reject(err));

        })

    }

    async fileExist(fileName:string) : Promise<{}> {

        fileName = this.path.normalize(DocumentDirectoryPath + '/' + fileName);

        return new Promise((resolve, reject) => {

            exists(fileName)
                .then(res => resolve(true))
                .catch(err => reject(err));

        });

    }

    async readFile(fileName:string) : Promise<{}> {

        fileName = this.path.normalize(DocumentDirectoryPath + '/' + fileName);

        return new Promise((resolve, reject) => {

            readFile(fileName)
                .then(content => resolve(content))
                .catch(err => reject(err));

        });

    }

}

export function factory() : MobileFs {

    return new MobileFs(Path);

}
