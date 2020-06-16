class Requests {
  _domain = "https://api.opendota.com/api";

  getPath(item) {
    return `${this._domain}${item}`;
  }
}

export default Requests;
