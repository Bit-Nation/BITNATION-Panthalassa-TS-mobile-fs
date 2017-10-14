declare module 'react-native-fs' {

    export const DocumentDirectoryPath: string;

    export function writeFile(filepath: string, contents: string, encoding?: string): Promise<void>;

    export function exists(filepath: string): Promise<boolean>;

    export function readFile(filepath: string, encoding?: string): Promise<string>;

}
