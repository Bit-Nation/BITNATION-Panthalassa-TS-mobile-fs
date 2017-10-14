import FileSystemInterface from 'BITNATION-Panthalassa-TS-fs-interface/FileSystemInterface'
import {writeFile, readFile, exists} from 'react-native-fs'

export class MobileFs implements FileSystemInterface {

    async writeFile(fileName:string, content:string) : Promise<{}> {

        return new Promise((resolve, reject) => {

            writeFile(fileName, content)
                .then(res => resolve({}))
                .catch(err => reject(err));

        })

    }

    async fileExist(fileName:string) : Promise<{}> {

        return new Promise((resolve, reject) => {

            exists(fileName)
                .then(res => resolve(true))
                .catch(err => reject(err));

        });

    }

    async readFile(fileName:string) : Promise<{}> {

        return new Promise((resolve, reject) => {

            readFile(fileName)
                .then(content => resolve(content))
                .catch(err => reject(err));

        });

    }

}

