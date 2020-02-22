export class Challenge {

  constructor(title, description, date, ownerId) {
    this.title = title;
    this.description = description;
    this.endDate = date;
    this.ownerId = ;
  }

  dateToString() {
    let yyyy = this.endDate.getFullYear();
    let mm = this.endDate.getMonth() + 1;
    let dd = this.endDate.getDate();
    return String(
      (mm < 10 ? '0' + mm : mm)
      + '-'
      + (dd < 10 ? '0' + dd : dd)
      + '-'
      + yyyy
    )
  }

}