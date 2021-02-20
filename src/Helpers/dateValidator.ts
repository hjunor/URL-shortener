import moment from 'moment'

export function dateValidator(date: Date) {

    const now = moment(new Date()); 
    const past = moment(date);
    const duration = moment.duration(now.diff(past));

 return Math.round(duration.asDays())
}