export class Job {
    beruf: string;
    titel: string;
    arbeitgeber: string;
    stadt: string = '';
    strasse: string = '';

    constructor(jobitem: any) {
        this.beruf = jobitem.beruf ? jobitem.beruf : '';
        this.titel = jobitem.titel ? jobitem.titel : '';
        this.arbeitgeber = jobitem.arbeitgeber ? jobitem.arbeitgeber : '';
        if (jobitem.arbeitsort) {
            this.stadt = jobitem.arbeitsort.ort ? jobitem.arbeitsort.ort : '';
            this.strasse = jobitem.arbeitsort.strasse ? jobitem.arbeitsort.strasse : '';
        }
    }
};