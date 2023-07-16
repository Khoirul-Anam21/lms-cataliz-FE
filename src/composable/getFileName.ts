export default function getFileNameFromUrl(filename: string){
    const nameSplit = filename.split('/');
    const lastSplit = nameSplit[nameSplit.length - 1];
    return lastSplit
}