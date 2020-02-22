export class Challenge {

  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.end_date = date;
  }

  dateToString() {
    let yyyy = this.end_date.getFullYear();
    let mm = this.end_date.getMonth() + 1;
    let dd = this.end_date.getDate();
    return String(
      (mm < 10 ? '0' + mm : mm)
      + '-'
      + (dd < 10 ? '0' + dd : dd)
      + '-'
      + yyyy
    )
  }

}